#!/usr/bin/env ts-node

import { readFileSync } from "fs";

function numbers(file: string): void {
    const content = readFileSync(file, "utf-8");
    for (const num of content.split(","))
        console.log(num.trim());
}

numbers('d01/ex01/numbers.txt');


// "type": "commonjs" → файлы .js работают по-старому, require/exports.
// "type": "module" → файлы .js считаются ESM (import/export).
