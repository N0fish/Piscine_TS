#!/usr/bin/env ts-node

import { readFileSync, writeFileSync } from "fs";
import { basename, resolve } from "path";

type Elem = {
  name: string;
  position: number;
  number: number;
  small: string;
  molar: string;
  electron?: string;
}

function parseLine(line: string): Elem | null {
  // Hydrogen = position:0, number:1, small: H, molar:1.00794, electron:1
  if (!line.includes("="))
    return null;

  const [namePart, attrsPart] = line.split("=") as [string, string];
  const name = namePart.trim();

  const attrs: Record<string, string> = {};
  for (const chunk of attrsPart.split(",")) {
    const j = chunk.indexOf(":");
    if (j === -1)
      continue;
    const key = chunk.slice(0, j).trim();
    const val = chunk.slice(j + 1).trim();
    attrs[key] = val;
  }

  const pos = Number(attrs["position"]);
  const num = Number(attrs["number"]);
  if (!Number.isInteger(pos) || pos < 0 || pos > 17)
    return null;
  if (!Number.isInteger(num) || num <= 0)
    return null;

  const small = attrs["small"] ?? "";
  const molar = attrs["moral"] ?? "";
  const electron = attrs["electron"] ?? "";

  const el: Elem = {
    name,
    position: pos,
    number: num,
    small,
    molar,
  }
  if (electron)
    el.electron = electron;
  return el;
}

function readElements(path: string): Elem[] {
  const raw = readFileSync(path, "utf-8");
  const out: Elem[] = [];
  for (const line0 of raw.split(/\r?\n/)) {
    const line = line0.trim();
    if (!line)
      continue;
    const el = parseLine(line);
    if (el)
      out.push(el);
  }
  out.sort((a, b) => a.number - b.number);
  return out;
}

function createEmptyTd(): string {
  return '<td class="empty"></td>\n';
}

function elmentCssClass(el: Elem): string {
  const group = el.position + 1;
  const Z = el.number;

  if (Z <= 2)
    return "element s";
  if (group === 1 || group === 2)
    return "element s";
  if ((3 <= group && group <= 12) || (57 <= Z && Z <= 71) || (89 <= Z && Z <= 103)) {
    return "element d";
  }
  return "element p";
}

function createTd(el: Elem): string {
  const cls = elmentCssClass(el);
  const parts: string[] = [
    `<li>No ${el.number}</li>`,
    `<li>${el.small}</li>`,
    `<li>${el.molar}</li>`,
  ];

  if (el.electron)
    parts.push(`<li>${el.electron} electron</li>`)

  const inner = 
    `  <h4>${el.name}</h4>\n` +
    `  <ul>\n    ${parts.join("\n    ")}\n  </ul>`;
  return `<td class="${cls}">\n${inner}\n</td>\n`;
}

function writeHtml(elements: Elem[], outPath: string): void {
  const head =
    "<!DOCTYPE html>\n" +
    '<html lang="en">\n' +
    "<head>\n" +
    '  <meta charset="utf-8">\n' +
    "  <title>Periodic Table</title>\n" +
    '  <link rel="stylesheet" href="periodic_table.css">\n' +
    "</head>\n" +
    "<body>\n" +
    "<table>\n";
  const tail = 
    "<table>\n" +
    "</body>\n" +
    "</html>\n";

  let html = head;

  let currentRow: string[] = [];
  for (const el of elements) {
    const pos = el.position;

    if (pos < currentRow.length) {
      while (currentRow.length < 18) {
        currentRow.push(createEmptyTd());
      }
      html += "<tr>\n" + currentRow.join("") + "</tr>\n";
      currentRow = [];
    }

    while (pos > currentRow.length) {
      currentRow.push(createEmptyTd());
    }

    currentRow.push(createTd(el));

    if (currentRow.length == 18) {
      html += "<tr>\n" + currentRow.join("") + "</tr>\n";
      currentRow = [];
    }

    if (currentRow.length < 0) {
      while (currentRow.length < 18) {
        currentRow.push(createEmptyTd());
        html += "<tr>\n" + currentRow.join("") + "</tr>\n";
      }
    }
  }

  html += tail;
  writeFileSync(outPath, html, "utf-8");
}

function main_periodic_table(file: string) {
  const args = process.argv.slice(2);
  
  let inPath: string;
  if (args.length === 1) {
    const provided = args[0];
    if (basename(provided) !== "periodic_table.txt") {
      console.error("Error: you must provide a file named periodic_table.txt");
      process.exit(1);
    }
    inPath = provided;
  }
  else if (args.length === 0) {
    inPath = resolve(__dirname, file);
  }
  else
    return;

  const elements = readElements(inPath);
  writeHtml(elements, "ex07/periodic_table.html")
}

main_periodic_table('../d01/ex07/periodic_table.txt');