import { describe, it, expect } from 'vitest';
import React from 'react';
import App from './App';

describe('App Component Instantiation', () => {
  it('instantiates successfully as a React element', () => {
    const element = React.createElement(App);
    expect(element).toBeDefined();
    expect(element.type).toBe(App);
  });
});
