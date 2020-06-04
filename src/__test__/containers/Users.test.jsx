import React from 'react';
import { mount } from 'enzyme';
import Users from '../../containers/Users';
import { getUsers } from '../../hooks/user';
import ContainerMock from '../../__mocks__/ContainerMock';
import usersMocks from '../../__mocks__/usersMocks';

jest.mock('../../hooks/user');

describe('Tests for <Users />', () => {

  let component;

  beforeEach(() => {
    getUsers.mockReturnValue([...usersMocks]);
    component = mount(
    <ContainerMock>
      <Users />
    </ContainerMock>);
  });

  test('Render Users', () => {
    expect(component.length).toEqual(1);
  });

  test('should have 4 users', () => {
    expect(component.find('User').length).toEqual(4);
  });

});