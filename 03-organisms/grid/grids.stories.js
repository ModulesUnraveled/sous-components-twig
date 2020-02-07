import React from 'react';

import grid from './grid.twig';

import gridData from './grid.yml';
import gridCardData from './grid-cards.yml';
import gridCtaData from './grid-ctas.yml';
import gridEventCardData from './grid-event-cards.yml';
import gridNewsCardData from './grid-news-cards.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Grids' };

export const defaultGrid = () => (
  <div dangerouslySetInnerHTML={{ __html: grid(gridData) }} />
);
export const cardGrid = () => (
  <div
    dangerouslySetInnerHTML={{ __html: grid({ ...gridData, ...gridCardData }) }}
  />
);
export const ctaGrid = () => (
  <div
    dangerouslySetInnerHTML={{ __html: grid({ ...gridData, ...gridCtaData }) }}
  />
);
export const eventCardGrid = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: grid({ ...gridData, ...gridEventCardData }),
    }}
  />
);
export const newsCardGrid = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: grid({ ...gridData, ...gridNewsCardData }),
    }}
  />
);
