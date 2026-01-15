type First<T extends any[]> = "0" extends keyof T ? T[0] : never;
