type MyReadonly<T extends {}> = {
  readonly [key in keyof T]: T[key];
};
