import fetchData from './fetchData.mock';

export default function getLevel(userId) {
  let response = fetchData(`https://server/user/${userId}`);
  response = JSON.parse(response);

  if (response.status === 'ok') {
    return `Текущий уровень: ${response.level}`;
  }

  return 'Данные недоступны';
}
