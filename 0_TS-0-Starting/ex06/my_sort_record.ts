#!/usr/bin/env ts-node

function my_sort_record() {
  const d: Record<string, string> = {
    'Hendrix':    '1942',
    'Allman':     '1946',
    'King':       '1925',
    'Clapton':    '1945',
    'Johnson':    '1911',
    'Berry':      '1926',
    'Vaughan':    '1954',
    'Cooder':     '1947',
    'Page':       '1944',
    'Richards':   '1943',
    'Hammett':    '1962',
    'Cobain':     '1967',
    'Garcia':     '1942',
    'Beck':       '1944',
    'Santana':    '1947',
    'Ramone':     '1948',
    'White':      '1975',
    'Frusciante': '1970',
    'Thompson':   '1949',
    'Burton':     '1939',
  }

  let entries: [string, string][] = Object.entries(d);
  entries.sort((a, b) => {
    const yearDiff = Number(a[1]) - Number(b[1]);
    if (yearDiff !== 0) {
      return yearDiff;
    }
    return a[0].localeCompare(b[0]);
  })

  for (const [name] of entries)
    console.log(name);
}

my_sort_record();