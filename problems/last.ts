type Last<T extends unknown[]> = T extends [...unknown[], infer L] ? L : never;
