import React from 'react';
import { mount } from 'enzyme';
import User from '../../components/User';
import ContainerMock from '../../__mocks__/ContainerMock';
import usersMocks from '../../__mocks__/usersMocks';

describe('Tests for <User />', () => {

  let component;
  const handlerDelete = jest.fn();

  beforeEach(() => {
    const userMock = {...usersMocks[0]};

    component = mount(
    <ContainerMock>
      <User user={userMock} handlerDelete={handlerDelete} />
    </ContainerMock>);
  });

  test('Render User', () => {
    expect(component.length).toEqual(1);
  });

  test("should show the user's name", () => {
    expect(component.find('h1').text()).toBe('Nicolas');
  });

  test("should show the user's email", () => {
    expect(component.find('h2').text()).toBe('hi@nico.com');
  });

  test("when click should called handlerDelete", () => {
    component.find('button').simulate('click');
    expect(handlerDelete).toHaveBeenCalled();
    expect(handlerDelete).toBeCalledTimes(1);
  });

});