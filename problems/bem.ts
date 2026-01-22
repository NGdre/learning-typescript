type AddSuffix<
  B extends string,
  S extends string,
  D extends string = "",
> = S extends "" ? B : `${B}${D}${S}`;

type TupleToStringUnion<T extends string[]> = T["length"] extends 0
  ? ""
  : T[number];

type BEM<B extends string, E extends string[], M extends string[]> = AddSuffix<
  AddSuffix<B, TupleToStringUnion<E>, "__">,
  TupleToStringUnion<M>,
  "--"
>;
