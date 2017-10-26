/*eslint-disable import/no-webpack-loader-syntax */

import React from 'react';
import {
  Slide,
  Image,
  CodePane,
  Heading,
  BlockQuote,
  Quote,
  Cite
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import allPic from './allthethings.jpg';

export default [
  <Slide>
    <Image src={ allPic } height="100%" width="100%" />
  </Slide>,
  <Slide>
    <Heading size="2">Proposal #2</Heading>
    <Heading size="4">Use selectors for all the things!!!</Heading>
  </Slide>,
  <Slide>
    <Heading size="4">selectors.js</Heading>
    <CodePane lang="js" source={ require('!raw-loader!./examples/selectors.example') }></CodePane>
  </Slide>,
  <CodeSlide
    transition={[]}
    lang="js"
    code={ require('!raw-loader!./examples/container.example') }
    ranges={ require('./examples/container.ranges.json') }
  />,
  <Slide>
    <Heading size="2">But...........why?</Heading>
  </Slide>,
  <Slide>
    <BlockQuote>
      <Quote>It is the only reason I manage to change the state shape drastically over the lessons without touching the components even once.</Quote>
      <Cite>Dan Abramov</Cite>
    </BlockQuote>
  </Slide>
];