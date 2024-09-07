import getLevel from '../level';
import fetchData from '../fetchData.mock';

jest.mock('../fetchData.mock');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testing getLevel function #1', () => {
  fetchData.mockReturnValue(JSON.stringify({ status: 'ok', level: 69 }));
  const result = getLevel(69);
  expect(result).toBe('Текущий уровень: 69');
});

test('testing getLevel function #2', () => {
  fetchData.mockReturnValue(JSON.stringify({ status: 'not ok' }));
  const result = getLevel();
  expect(result).toBe('Данные недоступны');
});