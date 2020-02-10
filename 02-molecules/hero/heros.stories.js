import React from 'react';
import { useEffect } from '@storybook/client-api';
// Global Data
import globalDataImages from '../../_global-data/images.yml';

import heroTwig from './hero.twig';

import heroData from './hero.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Heroes' };

export const hero = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: heroTwig({ ...globalDataImages, ...heroData }),
      }}
    />
  );
};
