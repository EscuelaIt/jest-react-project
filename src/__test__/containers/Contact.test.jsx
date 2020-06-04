import React from 'react';
import { mount } from 'enzyme';
import Contact from '../../containers/Contact';
import ContainerMock from '../../__mocks__/ContainerMock';

describe('Tests for <Contact />', () => {
  const contact = mount(
    <ContainerMock>
      <Contact />
    </ContainerMock>
  );

  test('Render del componente Contact', () => {
    expect(contact.length).toEqual(1);
  });

  test('Probar title', () => {
    expect(contact.find('.title').text()).toEqual('Soy contacto');
  });
});
