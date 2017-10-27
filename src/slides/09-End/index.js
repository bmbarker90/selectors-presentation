/*eslint-disable import/no-webpack-loader-syntax */

import React from 'react';
import {
  Slide,
  Image,
  Heading,
} from 'spectacle';

import thankYou from './thank-you.gif';

export default [
  <Slide>
    <Image src={ thankYou} height="100%" width="100%" />
  </Slide>,
  <Slide>
    <Heading size="2">Questions?</Heading>
  </Slide>,
];