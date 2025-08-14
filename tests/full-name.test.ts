import { PdfProperties, createFullName } from '../src';

describe(`Check full name generation`, () => {
  const testCases: {
    expected: string;
    pdfProperties: Pick<PdfProperties, 'toCivility' | 'toFirstName' | 'toLastName'>;
  }[] = [
    {
      expected: `Monsieur John Smith`,
      pdfProperties: {
        toCivility: 'mister',
        toFirstName: 'John',
        toLastName: 'Smith',
      },
    },
    {
      expected: `Monsieur Test With Leading Spaces`,
      pdfProperties: {
        toCivility: 'mister',
        toFirstName: 'Test',
        toLastName: 'With Leading Spaces  ',
      },
    },
    {
      expected: `Monsieur Test With Spaces`,
      pdfProperties: {
        toCivility: 'mister',
        toFirstName: 'Test ',
        toLastName: 'With Spaces',
      },
    },
    {
      expected: `Monsieur Without Firstname`,
      pdfProperties: {
        toCivility: 'mister',
        toLastName: 'Without Firstname',
      },
    },
    {
      expected: `Monsieur Without Lastname`,
      pdfProperties: {
        toCivility: 'mister',
        toFirstName: 'Without Lastname',
      },
    },
    {
      expected: `M. TooLong Too Long but ok with abbreviation`,
      pdfProperties: {
        toCivility: 'mister',
        toFirstName: 'TooLong',
        toLastName: 'Too Long but ok with abbreviation',
      },
    },
    {
      expected: `M. LastName Very Too Long, more than 45 char…`,
      pdfProperties: {
        toCivility: 'mister',
        toLastName: 'LastName Very Too Long, more than 45 characters',
      },
    },
    {
      expected: `.`,
      pdfProperties: {},
    },
  ];

  test.each(testCases)(
    `Template $pdfProperties → '$expected'`,
    async ({ pdfProperties, expected }) => {
      const fullName = createFullName(
        pdfProperties.toCivility,
        pdfProperties.toFirstName,
        pdfProperties.toLastName,
      );
      expect(fullName?.length).toBeLessThanOrEqual(45);
      expect(fullName).toBe(expected);
    },
  );
});
