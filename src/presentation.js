// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'spectacle';

// Import theme
import createTheme from 'spectacle-theme-nova/bundle';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'spectacle-theme-nova/syntax/prism-javascript';


import Slides from './slides';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('spectacle-theme-nova/syntax/prism.nova.css');

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck progress='pacman' transition={['slide']} transitionDuration={500} theme={theme}>
        { Slides }
      </Deck>
    );
  }
}