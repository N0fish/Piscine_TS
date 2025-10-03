#!/usr/bin/env ts-node

function getKey_all_in_record(obj: Record<string, string>, find: string): string | null {
  for (const [key, value] of Object.entries(obj)) {
    if (find.toLowerCase() === value.toLowerCase())
      return key;
  }
  return null;
}

function getValue_all_in_record(obj: Record<string, string>, find: string): string | null {
  for (const [key, value] of Object.entries(obj)) {
    if (find.toLowerCase() === key.toLowerCase())
      return value;
  }
  return null;
}

function all_in_record(token: string): void {
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

  const value: string | null = getValue_all_in_record(states, token);
  const key: string | null = getKey_all_in_record(capital_cities, token);
  if (value)
    console.log(`${getValue_all_in_record(capital_cities, value)} is the capital of ${getKey_all_in_record(states, value)}`);
  else if (key)
    console.log(`${getValue_all_in_record(capital_cities, key)} is the capital of ${getKey_all_in_record(states, key)}`);
  else
    console.log(`${token} is neither a capital city nor a state`);
}

function main_all_in_record(): void {
  const args = process.argv.slice(2);
  if (args.length !== 1)
      return;
  const tokens = args[0].split(",");
  for (let str of tokens) {
    str = str.trim()
    if (str === "")
      continue;
    all_in_record(str)
  }
}

main_all_in_record();