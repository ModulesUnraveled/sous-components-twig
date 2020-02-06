import React from 'react';

import list from './list.twig';

import listData from './list.yml';
import listCardData from './list-cards.yml';
import listCtaData from './list-ctas.yml';
import listEventCardData from './list-event-cards.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Lists' };

export const defaultList = () => (
  <div dangerouslySetInnerHTML={{ __html: list(listData) }} />
);
export const cardList = () => (
  <div
    dangerouslySetInnerHTML={{ __html: list({ ...listData, ...listCardData }) }}
  />
);
export const ctaList = () => (
  <div
    dangerouslySetInnerHTML={{ __html: list({ ...listData, ...listCtaData }) }}
  />
);
export const eventCardList = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: list({ ...listData, ...listEventCardData }),
    }}
  />
);
