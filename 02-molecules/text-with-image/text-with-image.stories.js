import React from 'react';

import textImageTwig from './text-with-image.twig';

import textImageData from './text-with-image.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Text With Image' };

export const textWithImage = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: textImageTwig(textImageData),
    }}
  />
);
