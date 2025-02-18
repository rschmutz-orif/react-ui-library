import React from 'react';
import { Counter } from '../src/index.jsx';
 
export default {
  component: Counter,
  title: 'Counter'
};
 
export const Main = () => <Counter />;
export const Secondary = () => <Counter secondary={true} />;