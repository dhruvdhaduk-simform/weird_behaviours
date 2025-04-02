/**
 * noImplicitAny
 *
 * This compiler flag works for function parameters but not with variable declarations.
 */

// @ts-ignore
function f(x) { }    // x is implicit any. Gives error.
let x;      // x is implicit any. Works fine
