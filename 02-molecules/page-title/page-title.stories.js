import React from 'react';

import pageTitleTwig from './page-title.twig';

import pageTitleData from './page-title.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Page Title' };

export const pageTitle = () => (
  <div dangerouslySetInnerHTML={{ __html: pageTitleTwig(pageTitleData) }} />
);
