import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import '../src/chip/chip.css';
import { Chip } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .add('Regular', () => {
    let isCloseable = boolean('Closeable', false, 'PROPS');
    return (
      <Chip
        onClick={action('clicked')}
        active={boolean('Active', false, 'PROPS')}
        outlined={boolean('Outlined', false, 'PROPS')}
        onCloseClick={isCloseable ? action('close clicked') : null}>
        Hello There!
      </Chip>
    );
  });
