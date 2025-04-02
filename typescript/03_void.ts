/**
 * void type in typescript
 * 
 * Only undefined is allowed to assign to void type.
 * But in certain cases any values can be assigned to void.
 */

const myFunc1 = (): void => {
    // return 1;   // Gives error
    // return "hi";    // Gives error
    // return undefined;    // Works
}

type FwithRetVoid = () => void;

const myFunc2: FwithRetVoid = () => {
    // return 1;        // Works
    // return "hi";     // Works
    // return undefined;    // Works
}