import React from 'react';
import { mount } from 'enzyme';
import Contact from '../../containers/Contact';
import ContainerMock from '../../__mocks__/ContainerMock';

describe('Tests for <Contact />', () => {

  let contact;

  beforeEach(() => {
    contact = mount(
    <ContainerMock>
      <Contact />
    </ContainerMock>);
  });

  test('Render del componente Contact', () => {
    expect(contact.length).toEqual(1);
  });

});