type LengthOfString<
  S extends string,
  I extends unknown[] = [],
> = S extends `${infer F}${infer Rest}`
  ? F extends ""
    ? I["length"]
    : LengthOfString<Rest, [...I, never]>
  : I["length"];
