export type RequireOne<T, K extends keyof T = keyof T> = Pick<T, Exclude<keyof T, K>> & { [P in K]-?: Required<Pick<T, P>> & Partial<Record<Exclude<K, P>, undefined>> }[K];
