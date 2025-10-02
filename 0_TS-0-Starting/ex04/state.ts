#!/usr/bin/env ts-node

function getKey(obj: {}, find: string): string | null {
  for (const [key, value] of Object.entries(obj)) {
    if (value === find)
      return key;
  }
  return null;
}

function state(capital: string): void {
  const states = {
    "Oregon": "OR",
    "Alabama": "AL",
    "New Jersey": "NJ",
    "Colorado": "CO",
  };

  const capital_cities = {
    "OR": "Salem",
    "AL": "Montgomery",
    "NJ": "Trenton",
    "CO": "Denver",
  };

  let abbrev: string | null = getKey(capital_cities, capital);
  if (!abbrev) {
    console.log("Unknown capital city");
    return;
  }

  const stateName: string | null = getKey(states, abbrev);
  console.log(stateName);
}

function main_state(): void {
    const args = process.argv.slice(2);
    if (args.length !== 1)
      return;
    state(args[0])
}

main_state();