const apiUrl = 'http://www.colr.org/json/colors/random/5';

export const getColors = async () => {
  const response = await fetch(apiUrl);
  const rawColorData = await response.json();
  console.log(rawColorData);

  return rawColorData;
}