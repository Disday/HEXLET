const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }
  const resultArray = [];
  for (const elem of definitions) {
    resultArray.push(`<dt>${elem[0]}</dt><dd>${elem[1]}</dd>`);
  }
  // console.log(result);
  return `<dl>${resultArray.join('')}</dl>`;
};
const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];
const definitions1 = [];
console.log(buildDefinitionList(definitions1));