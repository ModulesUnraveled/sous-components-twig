import React from 'react';

import button from './twig/button.twig';

import buttonData from './twig/button.yml';
import buttonAltData from './twig/button-alt.yml';
import buttonAlt2Data from './twig/button-alt2.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Buttons' };

export const Default = () => <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />;
export const alt = () => <div dangerouslySetInnerHTML={{ __html: button(buttonAltData) }} />;
export const alt2 = () => <div dangerouslySetInnerHTML={{ __html: button(buttonAlt2Data) }} />;
