// src/example213.ts

// clone a given regular expression.
export function example213(regexp: RegExp): RegExp {
    return new RegExp(regexp.source, regexp.flags)
}
