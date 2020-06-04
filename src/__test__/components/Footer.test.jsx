import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Tests for <Footer />', () => {

  let footer;

  beforeEach(() => {
    footer = mount(<Footer />);
  });

  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Debería existir un parrafo con jsjsj text', () => {
    const currentText = footer.find('.text').text();
    expect(currentText).toBe('Footer Curso de JS');
  });

  test('Debería existir un h1', () => {
    const currentText = footer.find('h1').text();
    expect(currentText).toBe('Hola');
  });

  test('Debería existir tres li', () => {
    const totalEls = footer.find('li').length;
    expect(totalEls).toEqual(3);
  });

});