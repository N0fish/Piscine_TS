#!/usr/bin/env ts-node

function getKey_all_in(obj: Record<string, string>, find: string): string | null {
  for (const [key, value] of Object.entries(obj)) {
    if (value.toLowerCase() === find.toLowerCase())
      return key;
  }
  return null;
}

function getValue_all_in(obj: Record<string, string>, find: string): string | null {
  for (const [key, value] of Object.entries(obj)) {
    if (key.toLowerCase() === find.toLowerCase())
      return value;
  }
  return null;
}

function all_in(token: string): void {
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

  let value = getValue_all_in(states, token);
  let key = getKey_all_in(capital_cities, token)
  if (value)
    console.log(`${getValue_all_in(capital_cities, value)} is the capital of ${getKey_all_in(states, value)}`);
  else if (key)
    console.log(`${getValue_all_in(capital_cities, key)} is the capital of ${getKey_all_in(states, key)}`);
  else
    console.log(`${token} is neither a capital city nor a state`);
}

function main_all_in(): void {
    const args = process.argv.slice(2);
    if (args.length !== 1)
      return;
    let token: string[] = args[0].split(",");
    for (let str of token) {
      str = str.trim()
      if (str === "")
        continue;
      all_in(str);
    }
}

main_all_in();