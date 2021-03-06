import { cloneElement } from 'react';

import Intro from './01-Intro';
import Overview from './02-Overview';
import Problem from './03-Problem';
import DerivedData from './04-DerivedData';
import AllSelectors from './05-AllSelectors';
import Colocate from './06-Colocate';
import Reselect from './07-Reselect';
import Standards from './08-Standards';
import End from './09-End';

const slides = [].concat(
  Intro,
  Overview,
  Problem,
  DerivedData,
  AllSelectors,
  Colocate,
  Reselect,
  Standards,
  End,
);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));