#!/usr/bin/env ts-node

function getKey_map(obj: Map<string, string>, find: string): string | null {
  for (const [key, value] of obj) {
    if (value === find)
      return key;
  }
  return null;
}

function state_map(capital: string): void {
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

  const abbrev: string | null = getKey_map(capital_cities, capital);
  if (!abbrev) {
    console.log("Unknown capital city");
    return;
  }

  const stateName: string | null = getKey_map(states, abbrev);
  console.log(stateName);
   
}

function main_map_state(): void {
    const args = process.argv.slice(2);
    if (args.length !== 1)
        return;
    state_map(args[0])
}

main_map_state();