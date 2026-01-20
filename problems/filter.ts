type Filter<T extends any[], P> = T extends [infer F, ...infer Rest] 
  ? F extends P ? [F, ...Filter<Rest, P>] : Filter<Rest, P>
  : []