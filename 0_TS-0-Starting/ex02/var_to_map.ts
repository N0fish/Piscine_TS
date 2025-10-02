#!/usr/bin/env ts-node

function compareByYearDesc( a: [string, string], b: [string, string] ): number {
  return Number(b[1]) - Number(a[1]);
}

function printMap(my_map: Map<string, string[]>): void {
  for (const [year, name] of my_map) {
    console.log(`${year} : ${name.join(" ")}`);
  }
}

function var_to_map(): void {
  console.log("\nvar_to_map");

  const m: [string, string][] = [
    ['Hendrix', '1942'],
    ['Allman', '1946'],
    ['King', '1925'],
    ['Clapton', '1945'],
    ['Johnson', '1911'],
    ['Berry', '1926'],
    ['Vaughan', '1954'],
    ['Cooder', '1947'],
    ['Page', '1944'],
    ['Richards', '1943'],
    ['Hammett', '1962'],
    ['Cobain', '1967'],
    ['Garcia', '1942'],
    ['Beck', '1944'],
    ['Santana', '1947'],
    ['Ramone', '1948'],
    ['White', '1975'],
    ['Frusciante', '1970'],
    ['Thompson', '1949'],
    ['Burton', '1939'],
  ];

  // m.sort((a, b) => Number(b[1]) - Number(a[1]));
  m.sort(compareByYearDesc);

  const my_map = new Map<string, string[]>();

  for (const [name, year] of m) {
    if (!my_map.has(year)) {
      my_map.set(year, []);
    }
    my_map.get(year)!.push(name);
  }
  printMap(my_map);
}

var_to_map();