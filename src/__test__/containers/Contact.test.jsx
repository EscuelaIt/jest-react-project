import React from 'react';
import { mount } from 'enzyme';
import Contact from '../../containers/Contact';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('Tests for <Contact />', () => {
  const contact = mount(
    <ProviderMock>
      <Contact />
    </ProviderMock>
  );

  test('Render del componente Contact', () => {
    expect(contact.length).toEqual(1);
  });

  test('Probar title', () => {
    expect(contact.find('.title').text()).toEqual('Soy contacto');
  });
});
