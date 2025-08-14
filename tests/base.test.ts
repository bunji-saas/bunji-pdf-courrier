import {
  countNbPages,
  generatePDFtoStream,
  generatePDFtoBuffer,
  PDFCourrierOptionsInternal,
  PdfProperties,
  generatePDFtoBlob,
} from '../src';
import { buffer } from 'node:stream/consumers';
import { parsePDF } from './helpers/pdf-parse';

async function getPdfData(
  fct: (pdfOptions: PDFCourrierOptionsInternal) => Promise<Buffer>,
  pdfCourrierOptions: PDFCourrierOptionsInternal,
) {
  const dataBuffer = await fct(pdfCourrierOptions);
  expect(dataBuffer).toBeDefined();
  const pdfData = await parsePDF(dataBuffer.buffer);
  return pdfData;
}

function getTodayFormated(now: Date = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Months start at 0!
  const day = now.getDate();
  return day.toString().padStart(2, '0') + '/' + month.toString().padStart(2, '0') + '/' + year;
}

describe(`Generate one PDF`, () => {
  const pdfProperties: PdfProperties = {
    content: `Somme content with variables : {{client_civilite}} {{client_prenom}}`,
    toCivility: 'mister',
    toFirstName: `Paul`,
    toLastName: `Dupont`,
  };

  const pdfCourrierOptions: PDFCourrierOptionsInternal = {
    advSetting: {},
    agency: {
      address: '6 Rue de Rambouillet',
      city: 'Cambrai',
      zipCode: '59400',
      name: 'Agence test',
      logo: './tests/helpers/logo.png',
      website: 'www.agencesbatignolles.fr',
      colour: '#f4ac04',
    },
    pdfs: [pdfProperties],
    styleOptions: {
      addressBox: {
        backgroundGrey: true,
      },
    },
  };

  test(`Check one PDF nb pages`, async () => {
    const nbPages = await countNbPages(pdfCourrierOptions);
    expect(nbPages).toBe(1);
  });

  const bufferGenerations = [
    {
      functionName: 'generatePDFtoBuffer',
      fct: async (pdfOptions: PDFCourrierOptionsInternal) => generatePDFtoBuffer(pdfOptions),
    },
    {
      functionName: 'generatePDFtoStream',
      fct: async (pdfOptions: PDFCourrierOptionsInternal) =>
        buffer(await generatePDFtoStream(pdfOptions)),
    },
    {
      functionName: 'generatePDFtoBlob',
      fct: async (pdfOptions: PDFCourrierOptionsInternal) =>
        Buffer.from(await (await generatePDFtoBlob(pdfOptions)).arrayBuffer()),
    },
  ];

  test.each(bufferGenerations)(`Check one PDF generation: $functionName`, async ({ fct }) => {
    const pdfData = await getPdfData(fct, pdfCourrierOptions);
    expect(pdfData.numPages).toBe(1);
    expect(pdfData.text).toContain(`Somme content with variables : Monsieur Paul`);
    expect(pdfData.text).toContain(pdfCourrierOptions.agency.name);
    expect(pdfData.text).toContain(pdfCourrierOptions.agency.address);
    expect(pdfData.text).toContain(pdfCourrierOptions.agency.zipCode);
    expect(pdfData.text).toContain(pdfCourrierOptions.agency.city);
  });

  describe.each(bufferGenerations)(`Check one PDF fix date: $functionName`, ({ fct }) => {
    const datesCases = [undefined, new Date('2022-01-01'), new Date('1999-12-31')];
    test.each(datesCases)(`Courrier sending at %p`, async (date) => {
      const pdfData = await getPdfData(fct, {
        ...pdfCourrierOptions,
        pdfs: [
          {
            ...pdfProperties,
            content: `Courrier wrote on {{aujourdhui}}`,
            sendingAt: date,
          },
        ],
      });
      expect(pdfData.text).toContain(getTodayFormated(date));
    });
  });

  test(`Check address too long formatting`, async () => {
    const options: PDFCourrierOptionsInternal = {
      ...pdfCourrierOptions,
      pdfs: [
        {
          toFirstName: 'Firstname Too Long, more than 45 characters',
          toLastName: 'Lastname Too Long, more than 45 characters',
          toCivility: 'mister-and-miss',
          toAddressLine1: 'Addr1 Too Long, more than 45 characters',
          toAddressLine2: 'Addr2 Too Long, more than 45 characters',
          toCity: 'City Too Long, more than 45 characters',
          toZipCode: '123456789012345678901234567890123456789012345678901234567890',
          toCountry: 'France',
        },
      ],
    };
    const pdfData = await getPdfData(generatePDFtoBuffer, options);
    expect(pdfData.numPages).toBe(1);
    expect(pdfData.text).toContain('M. & Mme ');
    expect(pdfData.text).toContain('Firstname Too Long, more than 45 ch…');
    expect(pdfData.text).not.toContain('Lastname'); // place is taken by firstname
    expect(pdfData.text).toContain(options.pdfs[0].toAddressLine1?.slice(0, 44));
    expect(pdfData.text).toContain(options.pdfs[0].toAddressLine2?.slice(0, 44));
    expect(pdfData.text).toContain(options.pdfs[0].toCity?.slice(0, 44));
    expect(pdfData.text).toContain(options.pdfs[0].toZipCode?.slice(0, 44));
    expect(pdfData.text).toContain('France');
  });
});
