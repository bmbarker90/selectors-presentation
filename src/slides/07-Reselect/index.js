/*eslint-disable import/no-webpack-loader-syntax */

import React from 'react';
import {
  Slide,
  CodePane,
  Heading,
  List,
  ListItem,
  Appear,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

export default [
  <Slide>
    <Heading size="3">Look great, but what about perf?</Heading>
  </Slide>,
  <Slide>
    <Heading size="2">Proposal #4</Heading>
    <Heading size="4">Use Reselect</Heading>
  </Slide>,
  <Slide notes="Optimization technique where expensive function calls are cached">
    <Heading size="2">Memoization</Heading>
  </Slide>,
  <Slide>
    <Heading size="4">factorial.js</Heading>
    <CodePane lang="js" source={ require('!raw-loader!./examples/factorial.example') }></CodePane>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={ require('!raw-loader!./examples/memoize.example') }
    ranges={ require('./examples/memoize.ranges.json') }
  />,
  <Slide>
    <Heading size="3">Gotchas</Heading>
    <List>
      <Appear><ListItem>Memory hit</ListItem></Appear>
      <Appear><ListItem>Doesn't work with impure funcs</ListItem></Appear>
    </List>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={ require('!raw-loader!./examples/selectors.example') }
    ranges={ require('./examples/selectors.ranges.json') }
  />,
];