import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Tests for <Footer />', () => {

  const footer = mount(<Footer />);

  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render del título', () => {
    expect(footer.find('.text').text()).toEqual('Footer Curso de JS');
  });
});