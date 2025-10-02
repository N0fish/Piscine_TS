#!/usr/bin/env ts-node

function capital_city(state: string): void {
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

  const keySt = states[state as keyof typeof states];
  if (!keySt) {
    console.log("Unknown state");
    return;
  }
  const keyCc = capital_cities[keySt as keyof typeof capital_cities];
  console.log(keyCc);
}

function main_capital_city(): void {
    const args = process.argv.slice(2);
    if (args.length !== 1)
        return;
    capital_city(args[0])
}

main_capital_city();