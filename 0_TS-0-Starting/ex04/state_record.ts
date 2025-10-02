#!/usr/bin/env ts-node

function getKey_record(obj: Record<string, string>, find: string): string | null {
  for (const [key, value] of Object.entries(obj)) {
    if (find === value)
      return key;
  }
  return null;
}

function state_record(capital: string): void {
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

  const abbrev: string | null = getKey_record(capital_cities, capital);
  if (!abbrev) {
    console.log("Unknown capital city");
    return;
  }
  const stateName: string | null = getKey_record(states, abbrev);
  console.log(stateName);
}

function main_record_state(): void {
    const args = process.argv.slice(2);
    if (args.length !== 1)
        return;
    state_record(args[0])
}

main_record_state();