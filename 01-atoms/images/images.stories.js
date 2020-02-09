import React from 'react';
import { useEffect } from '@storybook/client-api';
// Global Data
import globalDataImages from '../../_global-data/images.yml';

import image from './image/responsive-image.twig';
import figure from './image/figure.twig';
import iconTwig from './icons/icons.twig';
import bgImageTwig from './background-image/background-image.twig';

import imageData from './image/image.yml';
import figureData from './image/figure.yml';
import iconData from './icons/icons.yml';
import bgImageContent from './background-image/background-image--with-content.yml';

import './background-image/background-image';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Images' };

export const images = () => (
  <div dangerouslySetInnerHTML={{ __html: image(imageData) }} />
);
export const figures = () => (
  <div dangerouslySetInnerHTML={{ __html: figure(figureData) }} />
);
export const icons = () => (
  <div dangerouslySetInnerHTML={{ __html: iconTwig(iconData) }} />
);
export const backgroundImage = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      className="cl-example"
      dangerouslySetInnerHTML={{ __html: bgImageTwig(globalDataImages) }}
    />
  );
};

export const backgroundImageWithContent = () => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return (
    <div
      className="cl-example"
      dangerouslySetInnerHTML={{
        __html: bgImageTwig({ ...globalDataImages, ...bgImageContent }),
      }}
    />
  );
};
