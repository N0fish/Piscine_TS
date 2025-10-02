#!/usr/bin/env ts-node

function capital_city_map(state: string): void {
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

  const keySt = states.get(state);
  if (!keySt) {
    console.log("Unknown state");
    return;
  }
  const keyCc = capital_cities.get(keySt);
  console.log(keyCc);
}

function main_map(): void {
    const args = process.argv.slice(2);
    if (args.length !== 1)
        return;
    capital_city_map(args[0])
}

main_map();