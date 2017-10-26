import { cloneElement } from 'react';

import Intro from './01-Intro';
import Overview from './02-Overview';
import Problem from './03-Problem';
import DerivedData from './04-DerivedData';
import AllSelectors from './05-AllSelectors';

const slides = [].concat(
  Intro,
  Overview,
  Problem,
  DerivedData,
  AllSelectors,
);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));