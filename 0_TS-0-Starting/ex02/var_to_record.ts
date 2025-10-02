#!/usr/bin/env ts-node

function printRecord(my_record: Record<string, string[]>): void {
  for (const year in my_record) {
    console.log(`${year} : ${my_record[year].join(" ")}`);
  }
}

// function printRecord(my_record: Record<string, string[]>): void {
//   Object.keys(my_record)
//     .sort((a, b) => Number(b) - Number(a))
//     .forEach(year => {
//       console.log(`${year} : ${my_record[year].join(" ")}`);
//     });
// }

function var_to_record(): void {
  console.log("\nvar_to_record");
  
  // Tuple (Array<[string, string]>) -> [string, string] comme list[tuple[str, str]
  
  // [string, string][] == Array<[string, string]>
  const m: Array<[string, string]> = [
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

  const my_record: Record<string, string[]> = {};

  for (const [name, year] of m) {
    if (!my_record[year]) {
      my_record[year] = [];
    }
    my_record[year].push(name);
  }
  printRecord(my_record);
}

var_to_record();