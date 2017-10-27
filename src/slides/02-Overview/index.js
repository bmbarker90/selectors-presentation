import React from 'react';
import {
  Slide,
  Heading,
  Image,
  BlockQuote,
  Quote,
  Cite,
} from 'spectacle';

import flow from './flow.gif';

export default [
  <Slide>
    <Heading size="2">So...what are they?</Heading>
  </Slide>,
  <Slide>
    <BlockQuote>
      <Quote>Reducer: “How does my state change over time”? Selectors: “How do other modules make sense of my state?”</Quote>
      <Cite>Dan Abramov</Cite>
    </BlockQuote>
  </Slide>,
  <Slide>
    <Heading size="4">Selectors are the "reading API" for our state</Heading>
  </Slide>,
  <Slide>
    <Image src={ flow } width="100%" height="100%" />
  </Slide>,
];