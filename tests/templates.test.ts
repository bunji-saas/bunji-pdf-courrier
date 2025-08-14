import { PDFCourrierOptionsInternal, PdfProperties, getAdvSettingWithDefaultValues } from '../src';
import { cleanText, replaceVariablesInTemplate } from '../src/utils/remplace-variables-in-template';

describe(`Check template handle`, () => {
  const basePdfCourrierOptions: PDFCourrierOptionsInternal = {
    agency: {
      address: '6 Rue de Rambouillet',
      city: 'Cambrai',
      zipCode: '59400',
      name: 'Agence test',
      logo: './tests/logo.png',
      website: 'www.agencesbatignolles.fr',
      colour: '#f4ac04',
    },
    pdfs: [],
  };

  const testCases: { template: string; expected: string; pdfProperties?: PdfProperties }[] = [
    {
      template: `{{client_civilite}}`,
      expected: `Monsieur`,
      pdfProperties: {
        toCivility: 'mister',
      },
    },
    {
      template: `{{client_civilite}}`,
      expected: `Madame`,
      pdfProperties: {
        toCivility: 'miss',
      },
    },
    {
      template: `{{client_prenom}}`,
      expected: `John`,
      pdfProperties: {
        toFirstName: 'John',
      },
    },
    {
      template: `{{client_nom}}`,
      expected: `Doe`,
      pdfProperties: {
        toLastName: 'Doe',
      },
    },
    {
      template: `{{client_civilite}} {{client_prenom}} {{client_nom}}`,
      expected: `Monsieur John Doe`,
      pdfProperties: {
        toCivility: 'mister',
        toFirstName: 'John',
        toLastName: 'Doe',
      },
    },
    {
      template: `Bonjour {{client_civilite}} {{client_prenom}} {{client_nom}}, <br />{{client_prenom}} {{client_nom}} your name and firstname can be used twice in a template`,
      expected: `Bonjour Monsieur John Doe, <br />John Doe your name and firstname can be used twice in a template`,
      pdfProperties: {
        toCivility: 'mister',
        toFirstName: 'John',
        toLastName: 'Doe',
      },
    },
    {
      template: `Bonjour {{client_civilite}} {{client_prenom}} {{client_nom}}, <br />  This template don't keep leading spaces thanks to cleanText method {{client_prenom}} {{client_nom}} \n .`,
      expected: `Bonjour, <br />  This template don't keep leading spaces thanks to cleanText method.`,
    },
    {
      template: `{{client_adresse_ligne1}}`,
      expected: `123 Main Street`,
      pdfProperties: {
        toAddressLine1: '123 Main Street',
      },
    },
    {
      template: `{{client_adresse_ligne2}}`,
      expected: `Apartment 4B`,
      pdfProperties: {
        toAddressLine2: 'Apartment 4B',
      },
    },
    {
      template: `{{client_ville}}`,
      expected: `New York`,
      pdfProperties: {
        toCity: 'New York',
      },
    },
    {
      template: `{{client_code_postal}}`,
      expected: `10001`,
      pdfProperties: {
        toZipCode: '10001',
      },
    },
    {
      template: `{{agent_prenom}}`,
      expected: `Jane`,
      pdfProperties: {
        sender: { firstname: 'Jane' },
      },
    },
    {
      template: `{{agent_nom}}`,
      expected: `Smith`,
      pdfProperties: {
        sender: { lastname: 'Smith' },
      },
    },
    {
      template: `{{agent_tel_mobile}}`,
      expected: `0601020304`,
      pdfProperties: {
        sender: { telMobile: '0601020304' },
      },
    },
    {
      template: `{{agent_email}}`,
      expected: `jane.smith@example.com`,
      pdfProperties: {
        sender: { email: 'jane.smith@example.com' },
      },
    },
    {
      template: `{{agent_titre}}`,
      expected: `Real Estate Agent`,
      pdfProperties: {
        sender: { title: 'Real Estate Agent' },
      },
    },
    {
      template: `{{bien_surface}}`,
      expected: `150`,
      pdfProperties: {
        surface: 150,
      },
    },
    {
      template: `{{bien_surface_arrondi_dizaine}}`,
      expected: `160`,
      pdfProperties: {
        surface: 156,
      },
    },
    {
      template: `{{agence_nom}}`,
      expected: `Agence test`,
    },
    {
      template: `{{agence_adresse}}`,
      expected: `6 Rue de Rambouillet`,
    },
    {
      template: `{{agence_ville}}`,
      expected: `Cambrai`,
    },
    {
      template: `{{agence_code_postal}}`,
      expected: `59400`,
    },
    {
      template: `{{bien_type}}`,
      expected: `appartement`,
      pdfProperties: {
        propertyType: 'apartment',
      },
    },
    {
      template: `{{nombre_pieces}}`,
      expected: `5`,
      pdfProperties: {
        nbRooms: 5,
      },
    },
  ];

  const availableVariables = [
    'client_prenom',
    'client_nom',
    'client_civilite',
    'client_adresse_ligne1',
    'client_adresse_ligne2',
    'client_ville',
    'client_code_postal',
    'agent_prenom',
    'agent_nom',
    'agent_tel_mobile',
    'agent_email',
    'agent_titre',
    'bien_surface',
    'bien_surface_arrondi_dizaine',
    'nombre_pieces',
    // 'agence_nom',
    // 'agence_adresse',
    // 'agence_ville',
    // 'agence_code_postal',
    // 'aujourdhui',
  ];
  for (const availableVariable of availableVariables) {
    testCases.push({
      template: `{{${availableVariable}}}`,
      expected: ``,
    });
  }

  const variablesNumbers: [string, keyof PdfProperties][] = [
    ['bien_surface', 'surface'],
    ['bien_surface_arrondi_dizaine', 'surface'],
    ['nombre_pieces', 'nbRooms'],
  ];
  for (const [variableName, keyName] of variablesNumbers) {
    testCases.push({
      template: `{{${variableName}}}`,
      expected: `0`,
      pdfProperties: {
        [keyName]: 0,
      },
    });
  }

  test.each(testCases)(
    `Template $template → '$expected'`,
    async ({ template, pdfProperties, expected }) => {
      const templateAppliedText = cleanText(
        replaceVariablesInTemplate(
          template,
          pdfProperties || {},
          getAdvSettingWithDefaultValues(
            basePdfCourrierOptions.advSetting,
            basePdfCourrierOptions.agency,
          ),
        ),
      );
      expect(templateAppliedText).toBe(expected);
    },
  );
});
