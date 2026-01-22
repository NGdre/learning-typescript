type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type PercentageParser<
  A extends string,
  R extends [string, string, string] = ["", "", ""],
> = A extends `${infer F}${infer Rest}`
  ? F extends Digit
    ? PercentageParser<Rest, [R[0], `${R[1]}${F}`, R[2]]>
    : F extends "-" | "+"
      ? PercentageParser<Rest, [F, R[1], R[2]]>
      : F extends "%"
        ? PercentageParser<Rest, [R[0], R[1], F]>
        : never
  : R;
