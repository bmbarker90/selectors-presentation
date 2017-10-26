import React from 'react';
import {
  Slide,
  Heading,
  Image,
} from 'spectacle';

import flow from './flow.gif';

export default [
  <Slide>
    <Heading size="2">So...what are they?</Heading>
  </Slide>,
  <Slide>
    <Image src={ flow } width="100%" height="100%" />
  </Slide>,
  <Slide>
    <Heading size="4">Selectors are the "reading API" for our state</Heading>
  </Slide>
];