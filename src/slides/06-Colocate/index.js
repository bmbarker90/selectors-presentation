/*eslint-disable import/no-webpack-loader-syntax */

import React from 'react';
import {
  Slide,
  Image,
  Heading,
} from 'spectacle';

import colocatingTweet from './colocating.png';

export default [
  <Slide>
    <Image src={ colocatingTweet } />
  </Slide>,
  <Slide>
    <Heading size="2">Proposal #3</Heading>
    <Heading size="4">Colocate selectors with reducers</Heading>
  </Slide>,
];