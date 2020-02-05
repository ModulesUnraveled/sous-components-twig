import React from 'react';

import card from './basic/card.twig';

import cardData from './basic/card.yml';
import cardBgData from './basic/card-bg.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards' };

export const cardExample = () => (
  <div dangerouslySetInnerHTML={{ __html: card(cardData) }} />
);
export const cardWithBackground = () => (
  <div
    dangerouslySetInnerHTML={{ __html: card({ ...cardData, ...cardBgData }) }}
  />
);
