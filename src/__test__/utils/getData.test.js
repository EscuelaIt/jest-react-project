import getData from '../../utils/getData';
import usersMocks from '../../__mocks__/usersMocks';

describe('Tests for getData', () => {

  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Call API', () => {

    fetch.mockResponseOnce(JSON.stringify({ results: usersMocks }));

    getData(20)
    .then(rta => {
      expect(rta.length).toEqual(2);
    })
    expect(fetch.mock.calls[0][0]).toEqual('https://randomuser.me/api/?results=20');
  });

});