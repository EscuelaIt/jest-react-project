import React from 'react';
import { mount } from 'enzyme';
import User from '../../components/User';
import ContainerMock from '../../__mocks__/ContainerMock';
import usersMock from '../../__mocks__/usersMocks';

describe('Tests for <User />', () => {
  test('Render del componente User', () => {
    const userMock = {...usersMock[0]};
    const handlerDeleteMock = jest.fn();
    const user = mount(
      <ContainerMock>
        <User user={userMock} handlerDelete={handlerDeleteMock}/>
      </ContainerMock>
    );
    expect(user.length).toEqual(1);
  });

  test('Test name in <User />', () => {
    const userMock = {...usersMock[0]};
    const handlerDeleteMock = jest.fn();
    const user = mount(
      <ContainerMock>
        <User user={userMock} handlerDelete={handlerDeleteMock}/>
      </ContainerMock>
    );
    expect(user.find('h1').text()).toEqual("Nicolas");
  });

  test('Test click in <User />', () => {
    const userMock = {...usersMock[0]};
    const handlerDeleteMock = jest.fn();
    const user = mount(
      <ContainerMock>
        <User user={userMock} handlerDelete={handlerDeleteMock}/>
      </ContainerMock>
    );
    user.find('button').simulate('click');
    expect(handlerDeleteMock).toBeCalledTimes(1);
  });
});
