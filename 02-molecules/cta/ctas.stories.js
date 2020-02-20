import React from 'react';

import ctaTwig from './cta.twig';

import ctaData from './cta.yml';
import ctaHomeData from './cta~home.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/CTAs' };

export const cta = () => (
  <div dangerouslySetInnerHTML={{ __html: ctaTwig(ctaData) }} />
);
export const ctaHome = () => (
  <div dangerouslySetInnerHTML={{ __html: ctaTwig(ctaHomeData) }} />
);
