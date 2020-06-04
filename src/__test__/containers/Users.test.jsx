import React from 'react';
import { mount } from 'enzyme';
import Users from '../../containers/Users';
import User from '../../components/User';
import ContainerMock from '../../__mocks__/ContainerMock';
import { getUsers } from '../../hooks/user';
import usersMock from '../../__mocks__/usersMocks';

jest.mock("../../hooks/user");

describe('Tests for <Users />', () => {

  let wrapperComponent;

  beforeEach(() => {

    getUsers.mockReturnValue([...usersMock]);
    wrapperComponent = mount(
      <ContainerMock>
        <Users />
      </ContainerMock>
    );
  });

  test('Render del componente Users', () => {
    expect(wrapperComponent.length).toEqual(1);
  });

  test('Debería renderizar 4 Users', () => {
    expect(wrapperComponent.find(User).length).toEqual(4);
  });
});
