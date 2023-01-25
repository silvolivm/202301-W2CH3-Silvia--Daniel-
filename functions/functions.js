export const arrayLength = (array) => {
  let i = 0;
  let length = 0;
  while (array[i] !== undefined) {
    if (array[i]) {
      i++;
      length++;
    }
  }
  return length;
};
