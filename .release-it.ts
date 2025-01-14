import type { Config } from 'release-it';

const config: Config = {
  git: {
    tagName: 'v${version}',
  },
  github: {
    release: true,
  },
};
export default config;
