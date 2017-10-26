import React from 'react';

import {
  Slide,
  Heading,
  Image,
} from 'spectacle';

import concerns from './separation-of-concerns.png';

export default [
  <Slide>
    <Heading size="1">Selectors</Heading>
    <Heading size="4">Slice your concerns like butter!</Heading>
  </Slide>,
  <Slide>
    <Image height="525px" width="525px" src={ concerns } />
  </Slide>,
];