type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [key in T[number]]: key;
};
