#!/usr/bin/env ts-node

function getKey_all_in_map(obj: Map<string, string>, find: string): string | null {
  for (const [key, value] of obj) {
    if (value.toLowerCase() === find.toLowerCase())
      return key;
  }
  return null;
}

function getValue_all_in_map(obj: Map<string, string>, find: string): string | null {
  for (const [key, value] of obj) {
    if (key.toLowerCase() === find.toLowerCase())
      return value;
  }
  return null;
}

function all_in_map(token: string): void {
  const states = new Map<string, string>([
    ["Oregon", "OR"],
    ["Alabama", "AL"],
    ["New Jersey", "NJ"],
    ["Colorado", "CO"],
  ]);

  const capital_cities = new Map<string, string> ([
    ["OR", "Salem"],
    ["AL", "Montgomery"],
    ["NJ", "Trenton"],
    ["CO", "Denver"],
  ]);

  let value = getValue_all_in_map(states, token);
  let key = getKey_all_in_map(capital_cities, token);
  if (value)
    console.log(`${getValue_all_in_map(capital_cities, value)} is the capital of ${getKey_all_in_map(states, value)}`);
  else if (key)
    console.log(`${getValue_all_in_map(capital_cities, key)} is the capital of ${getKey_all_in_map(states, key)}`);
  else
    console.log(`${token} is neither a capital city nor a state`);
}

function main_all_in_map(): void {
    const args = process.argv.slice(2);
    if (args.length !== 1)
        return;
    const tokens = args[0].split(",");
    for (let str of tokens) {
      str = str.trim();
      if (str === "")
        continue;
      all_in_map(str);
    }
}

main_all_in_map();