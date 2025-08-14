import type { Config } from 'jest';

import JestConfig from './jest.config';

const config: Config = {
  ...JestConfig,

  collectCoverage: true,
  ci: true,
  reporters: [
    'default',
    [
      'jest-junit',
      { ancestorSeparator: ' > ', outputDirectory: './coverage', addFileAttribute: 'true' },
    ],
  ],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
};

export default config;
