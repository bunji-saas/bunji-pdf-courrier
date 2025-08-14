import type { Config } from 'release-it';

const config: Config = {
  hooks: {
    'before:init': 'yarn test',
  },
  git: {
    tagName: 'v${version}',
  },
  gitlab: {
    release: true,
  },
};
export default config;
