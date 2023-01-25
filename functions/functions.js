const arrayLength = (array) => {
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

const arrayPush = (array, item) => {
  const x = arrayLength(array);
  array[x] = item;
  return x;
};

const arrayPop = (array) => {
  const x = arrayLength(array);
  const y = array[x - 1];
  array[x - 1] = undefined;
  return y;
};
