import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Name from './Name';

storiesOf('Name', module)
  .add('Name', () => (
    <div>
      <h2>Normal</h2>
      <Name name="Louie Anderson" />
      <h2>Highlighted</h2>
      <Name name="Louie Anderson" type="highlight" />
      <h2>Disabled</h2>
      <Name name="Louie Anderson" type="disabled" />
    </div>
  ))