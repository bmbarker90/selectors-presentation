/*eslint-disable import/no-webpack-loader-syntax */

import React from 'react';
import {
  Slide,
  Image,
  CodePane,
  Heading,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import gross from './gross.gif';


export default [
  <Slide>
    <Heading size="1">The Problem</Heading>
  </Slide>,
  <Slide>
    <Heading size="4">actions.js</Heading>
    <CodePane lang="js" source={ require('!raw-loader!./examples/actions.example') }></CodePane>
  </Slide>,
  <Slide>
    <Heading size="4">todos-reducer.js</Heading>
    <CodePane lang="js" source={ require('!raw-loader!./examples/reducer.todos.example') }></CodePane>
  </Slide>,
  <Slide>
    <Heading size="4">visibility-reducer.js</Heading>
    <CodePane lang="js" source={ require('!raw-loader!./examples/reducer.visibility.example') }></CodePane>
  </Slide>,
  <Slide>
    <Heading size="4">store.js</Heading>
    <CodePane lang="js" source={ require('!raw-loader!./examples/store.example') }></CodePane>
  </Slide>,
  <CodeSlide
    className="language-js"
    transition={[]}
    lang="js"
    code={ require('!raw-loader!./examples/container.example') }
    ranges={ require('./examples/container.ranges.json') }
  />,
  <Slide>
    <Image src={ gross } height="100%" width="100%" />
  </Slide>,
  <Slide>
    <Heading size="3">But...how can it get better?</Heading>
  </Slide>
];

