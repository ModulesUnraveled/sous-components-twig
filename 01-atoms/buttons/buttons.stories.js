import React from 'react';

import button from './button.twig';

import buttonData from './button.yml';
import buttonAltData from './button-alt.yml';
import buttonAlt2Data from './button-alt2.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Buttons' };

export const All = () => (
  <>
    <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />
    <br />
    <div dangerouslySetInnerHTML={{ __html: button(buttonAltData) }} />
    <br />
    <div dangerouslySetInnerHTML={{ __html: button(buttonAlt2Data) }} />
  </>
);
export const Default = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />
);
export const alt = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonAltData) }} />
);
export const alt2 = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonAlt2Data) }} />
);
