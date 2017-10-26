import { cloneElement } from 'react';

import Intro from './01-Intro';
import Overview from './02-Overview';
import Why from './03-Why';

const slides = [].concat(
  Intro,
  Overview,
  Why,
);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));