export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

export function getRandomFromArray(array){
  return array[getRandomIntInclusive(0, array.length - 1)];
}
