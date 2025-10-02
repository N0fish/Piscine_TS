#!/usr/bin/env ts-node

function capital_city_record(state: string): void {
  const states: Record<string, string> = {
    "Oregon": "OR",
    "Alabama": "AL",
    "New Jersey": "NJ",
    "Colorado": "CO",
  };

  const capital_cities: Record<string, string> = {
    "OR": "Salem",
    "AL": "Montgomery",
    "NJ": "Trenton",
    "CO": "Denver",
  };

  const keySt = states[state];
  if (!keySt) {
    console.log("Unknown state");
    return;
  }
  const keyCc = capital_cities[keySt];
  console.log(keyCc);
}

function main_record(): void {
    const args = process.argv.slice(2);
    if (args.length !== 1)
        return;
    capital_city_record(args[0])
}

main_record();