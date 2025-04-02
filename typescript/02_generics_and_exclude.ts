
/**
 * Exclude type with vs without generics.
 *
 * Exclude does not work when we remove generics from it.
 */

// type Y = Exclude<any, any>

type A = 'a' | 'b' | 'c' | 'd';
type X = 'b' | 'd';

type _Exclude<T, U> = T extends U ? never : T;    // Same as Exclude utility type.

type B1 = _Exclude<A, X>;   // Works
// Use the same _Exclude logic but without generics.
type B2 = A extends X ? never : A;      // Doesn't work


export {};