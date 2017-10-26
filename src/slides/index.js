import { cloneElement } from 'react';

import Intro from './01-Intro';
import Overview from './02-Overview';
import Problem from './03-Problem';
import Why from './Why';

const slides = [].concat(
  Intro,
  Overview,
  Problem,
  Why,
);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));