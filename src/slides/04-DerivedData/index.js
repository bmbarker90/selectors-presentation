/*eslint-disable import/no-webpack-loader-syntax */

import React from 'react';
import {
  Slide,
  Image,
  CodePane,
  Heading,
  List,
  ListItem,
  Appear
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import noGif from './no.gif';
import kissPic from './kiss.jpg';

export default [
  <Slide>
    <Heading size="3">We could...add it to state</Heading>
  </Slide>,
  <Slide>
    <Image src={ noGif } height="100%" width="100%" />
  </Slide>,
  <Slide>
    <Heading size="4">Why not?</Heading>
    <List>
      <Appear><ListItem>It's messy</ListItem></Appear>
      <Appear><ListItem>K.I.S.S.</ListItem></Appear>
    </List>
  </Slide>,
  <Slide>
    <Image src={ kissPic } height="100%" width="100%" />
  </Slide>,
  <Slide>
    <Heading size="4">Why not?</Heading>
    <List>
      <ListItem>It's messy</ListItem>
      <ListItem>Keep it simple stupid</ListItem>
      <Appear><ListItem>Hard to maintain</ListItem></Appear>
    </List>
  </Slide>,
  <Slide>
    <Heading size="2">Enter...selectors!!!</Heading>
  </Slide>,
  <Slide>
    <Heading size="2">Proposal #1</Heading>
    <Heading size="4">Use selectors for derived data</Heading>
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
    <Heading size="2">Container still knows structure</Heading>
    <Heading size="4">So how do we make it better?</Heading>
  </Slide>
];

