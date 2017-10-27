/*eslint-disable import/no-webpack-loader-syntax */

import React from 'react';
import {
  Slide,
  Heading,
  List,
  ListItem,
  Appear,
} from 'spectacle';

import colocatingTweet from './colocating.png';



export default [
  <Slide>
    <Heading size="2">Proposal #5</Heading>
    <Heading size="4">Create some standards</Heading>
  </Slide>,
  <Slide>
    <Heading size="4">Possible ones</Heading>
    <List>
      <Appear><ListItem>Naming - start with "get"</ListItem></Appear>
      <Appear><ListItem>Test whole flow, not just "resultFunc"</ListItem></Appear>
    </List>
  </Slide>
];