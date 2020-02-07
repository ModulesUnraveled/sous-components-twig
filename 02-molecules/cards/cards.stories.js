import React from 'react';

import cardTwig from './basic/card.twig';
import eventCardTwig from './event/event-card.twig';
import newsCardTwig from './news/news-card.twig';

import cardData from './basic/card.yml';
import cardBgData from './basic/card-bg.yml';
import eventCardData from './event/event-card.yml';
import newsCardData from './news/news-card.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards' };

export const card = () => (
  <div dangerouslySetInnerHTML={{ __html: cardTwig(cardData) }} />
);
export const cardWithBackground = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: cardTwig({ ...cardData, ...cardBgData }),
    }}
  />
);
export const eventCard = () => (
  <div dangerouslySetInnerHTML={{ __html: eventCardTwig(eventCardData) }} />
);
export const newsCard = () => (
  <div dangerouslySetInnerHTML={{ __html: newsCardTwig(newsCardData) }} />
);
