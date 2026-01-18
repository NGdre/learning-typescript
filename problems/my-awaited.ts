type MyAwaited<T> = T extends PromiseLike<infer I> ? MyAwaited<I> : T;
