type Diff<O, O1, D = Omit<O, keyof O1> & Omit<O1, keyof O>> = {
  [Key in keyof D extends PropertyKey ? keyof D : never]: Key extends keyof O
    ? O[Key]
    : Key extends keyof O1
      ? O1[Key]
      : never;
};
