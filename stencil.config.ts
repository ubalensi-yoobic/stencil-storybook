import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil',
  outputTargets: [{ type: 'dist', esmLoaderPath: '../loader' }],
  plugins: [sass()],
  watchIgnoredRegex: /^.*\.stories\.tsx~?$/
};
