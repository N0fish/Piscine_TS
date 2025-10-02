#!/usr/bin/env deno

// deno var.ts // → run terminal
// npx ts-node --compiler-options '{"module":"commonjs"}' var.ts
// npx tsx var.ts

function my_var(): void {
    let varInt: number = 42;
    let varStrN: string = "42";
    let varStrS: string = "quarante-deux";
    let varFloat: number = 42.0;
    let varBool: boolean = true;

    let varSym: symbol = Symbol("id");               // symbol
    let varUndef: undefined = undefined;             // undefined
    let varBig: bigint = 42n;                        // bigint
    let varFunc: (x: number) => number = (x) => x*x; // function
    // const varFunc = (x: number) => x * 2;

    // object -> (list → Array)
    let varList: number[] = [42];
    // object -> (tuple → кортеж фиксированной длины)
    let varTuple: [number, string] = [42, "cabane"];
    // object -> (dict → объект)
    let varDict: Record<number, number> = {42: 42};
    // object -> (set → Set)
    let varSet: Set<number> = new Set([42, 42]); // = (1)obj
    // object -> (Map → dict)
    let varDictMap: Map<number, number> = new Map([[42, 42]]);
    // date
    let varDate: Date = new Date("2025-10-02T00:00:00Z");
    // regex
    let varRegex = /hello/i;

    // console.log(regex.test("Hello world")); // true // ищет "hello", без учёта регистра
    // console.log(regex.test("bye")); // false

    const vars = [
        varInt, varStrN, varStrS, varFloat, varBool,
        varSym, varUndef, varBig, varFunc,
        varList, varTuple, varDict, varSet, varDictMap, varDate, varRegex
    ];

    for (const v of vars) {
        console.log(v, "has a runtime type", detectType(v));
        // console.log(`${v} has a runtime type ${typeof v}`);
    }
}

function detectType(v: unknown): string {
  if (v === null)
    return "null";
  const t = typeof v;
  if (t !== "object")
    return t
  if (Array.isArray(v)) 
    return "list/tuple (array in JS)";
  if (v instanceof Set) 
    return "set";
  if (v instanceof Map) 
    return "map";
  if (v instanceof Date)
    return "date";
  if (v instanceof RegExp)
    return "regexp";
  if (v !== null && typeof v === "object" && Object.getPrototypeOf(v) === Object.prototype) 
    return "dict-like object";

  return typeof v;
}

my_var();