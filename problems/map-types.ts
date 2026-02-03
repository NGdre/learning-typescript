type MapFrom<R> = R extends { mapFrom: infer T } ? T : never;
type MapTo<R, F> = R extends { mapFrom: F; mapTo: infer T } ? T : never;

type MapTypes<T, R> = {
  [K in keyof T]: T[K] extends MapFrom<R> ? MapTo<R, T[K]> : T[K];
};
