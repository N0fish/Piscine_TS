## Starting

```
npm install -D @types/node
```

<details>
<summary>🇬🇧 ENGLISH VERSION</summary>

## ex00 – My first variables
The function `my_var()` creates variables of different types in TypeScript (primitives: `number`, `string`, `boolean`, `symbol`, `undefined`, `bigint`, and a function; objects: `Array` (list), `Array` (tuple[42]), `Record` dict-like `object`, `Set`, `Map`, `Date`, `RegExp`) and then prints each value together with its detected runtime type (using a custom `detectType()` `function`, because `typeof` in JavaScript returns `"object"` for many non-primitive structures).

### Usage
```bash
./var.ts
```
<br>

## ex01 – Numbers
The script opens `numbers.txt` (1–100 separated by commas) and prints the numbers one per line, without commas.

```bash
ex01/numbers.ts
```
or
```bash
npm run start:ex01
```
<br>

## ex02 – My first Map and Record
A list of pairs (musician → birth year) must be transformed into a Map or Record (year → musician) and displayed line by line in the format:

```yaml
1970 : Frusciante
1954 : Vaughan
1948 : Ramone
...
```
```bash
ex02/var_to_map.ts
```
or
```bash
npm run start:ex02_00
```
```yaml
1948 : Ramone
1954 : Vaughan
1970 : Frusciante
...
```
```bash
ex02/var_to_record.ts
```
or
```bash
npm run start:ex02_01
```
<br>

## ex03 – Key search
Two "dictionaries": `states` and `capital_cities`.
The program takes a state (`Oregon`) and prints its capital (`Salem`).
If the state doesn’t exist → `"Unknown state"`.

```bash
ex03/capital_city.ts Oregon
```
- Salem
```bash
ex03/capital_city_map.ts Ile-De-France
```
- Unknown state
```bash
ex03/capital_city_record.ts
```
```bash
npm run start:ex03_00 Oregon Alabama
```
```bash
npm run start:ex03_01 Oregon Alabama Ile-De-France
```
<br>

## ex04 – Search by value
Same "dictionaries".
The program takes a capital (`Salem`) and prints its state (`Oregon`).
If the capital doesn’t exist → `"Unknown capital city"`.

```bash
ex04/state.ts Salem
```
- Oregon
```bash
ex04/state_map.ts Paris
```
- Unknown capital city
```bash
ex04/state_record.ts
```
```bash
npm run start:ex04_00 Trenton Alabama
```
<br>

## ex05 – Search by key or value
Takes a comma-separated string. For each element, determine:
- if it’s a state,
- if it’s a capital,
- or neither.
Not case-sensitive, ignores multiple spaces.

```bash
ex05/all_in_map.ts "New jersey, Tren ton, NewJersey, Trenton, toto, , sAlem"
```
```bash
npm run start:ex05_01 "New jersey, Tren ton, NewJersey, Trenton, toto, , sAlem"
```
```
Trenton is the capital of New Jersey
Tren ton is neither a capital city nor a state
NewJersey is neither a capital city nor a state
Trenton is the capital of New Jersey
toto is neither a capital city nor a state
Salem is the capital of Oregon
```
<br>

## ex06 – "Dictionary" sorting
A "dictionary" (musician → year).
Print the musicians sorted by year (ascending), then alphabetically if years are the same.

```bash
ex06/my_sort.ts
```
<br>

## ex07 – Periodic table
Using `periodic_table.txt`, generate `periodic_table.html` that represents the periodic table of elements in HTML.
- each element in a `<td>`
- name in `<h4>`
- properties in `<ul>`
- page must be W3C valid

```bash
ex07/periodic_table.ts
```
or
```bash
npm run start:ex07  
```
```bash
open ex07/periodic_table.html
```
<br>
</details>

---

<details>
<summary>🇫🇷 FRENCH VERSION</summary>

## ex00 – Mes premières variables
La fonction `my_var()` crée des variables de différents types en TypeScript (primitifs : `number`, `string`, `boolean`, `symbol`, `undefined`, `bigint`, ainsi qu’une fonction ; `objets` : `Array` (liste), `Array` (tuple [42]), `Record` objet de type dictionnaire, `Set`, `Map`, `Date`, `RegExp`) puis affiche chaque valeur avec son type détecté à l’exécution (grâce à la fonction personnalisée `detectType()`, car l’opérateur `typeof` en JavaScript renvoie `"object"` pour de nombreuses structures non primitives).

### Usage
```bash
./var.ts
```
or
```bash
npm run start:ex00
```
<br>

## ex01 – Nombres
Le script ouvre `numbers.txt` (1–100 séparés par des virgules) et affiche les nombres un par ligne, sans virgule.

```bash
ex01/numbers.ts
```
or
```bash
npm run start:ex01
```
<br>

## ex02 – Mon premier Map et Record
Une liste de couples (musicien → année de naissance) doit être transformée en Map ou Record (année → musicien) et affichée ligne par ligne au format :

```yaml
1970 : Frusciante
1954 : Vaughan
1948 : Ramone
...
```
```bash
ex02/var_to_map.ts
```
or
```bash
npm run start:ex02_00
```
```yaml
1948 : Ramone
1954 : Vaughan
1970 : Frusciante
...
```
```bash
ex02/var_to_record.ts
```
or
```bash
npm run start:ex02_01
```
<br>

## ex03 – Key search
Deux "dictionnaires" : `states` et `capital_cities`.
Le programme prend un État (`Oregon`) et affiche sa capitale (`Salem`).
Si l’État n’existe pas → `"Unknown state"`.

```bash
ex03/capital_city.ts Oregon
```
- Salem
```bash
ex03/capital_city_map.ts Ile-De-France
```
- Unknown state
```bash
ex03/capital_city_record.ts
```
```bash
npm run start:ex03_00 Oregon Alabama
```
```bash
npm run start:ex03_01 Oregon Alabama Ile-De-France
```
<br>

## ex04 – Recherche par valeur
Même "dictionnaires".
Le programme prend une capitale (`Salem`) et affiche l’État (`Oregon`).
Si la capitale n’existe pas → `"Unknown capital city"`.

```bash
ex04/state.ts Salem
```
- Oregon
```bash
ex04/state_map.ts Paris
```
- Unknown capital city
```bash
ex04/state_record.ts
```
```bash
npm run start:ex04_00 Trenton Alabama
```
<br>

## ex05 – Recherche par clé ou par valeur
Prend une chaîne séparée par des virgules. Pour chaque élément, détermine :
- si c’est un État,
- si c’est une capitale,
- ou rien.
Ne tient pas compte de la casse ni des espaces multiples.

```bash
ex05/all_in_map.ts "New jersey, Tren ton, NewJersey, Trenton, toto, , sAlem"
```
```bash
npm run start:ex05_01 "New jersey, Tren ton, NewJersey, Trenton, toto, , sAlem"
```
```
Trenton is the capital of New Jersey
Tren ton is neither a capital city nor a state
NewJersey is neither a capital city nor a state
Trenton is the capital of New Jersey
toto is neither a capital city nor a state
Salem is the capital of Oregon
```
<br>

## ex06 – Tri d’un "dictionnaire"
Un "dictionnaire" (musicien → année).
Afficher les musiciens triés par année croissante, puis par ordre alphabétique si années identiques.

```bash
ex06/my_sort.ts
```
<br>

## ex07 – Tableau périodique
À partir de `periodic_table.txt`, générer `periodic_table.html` qui représente le tableau de Mendeleïev en HTML.
- chaque élément dans un `<td>`
- nom dans `<h4>`
- propriétés dans `<ul>`
- page valide W3C

```bash
ex07/periodic_table.ts
```
or
```bash
npm run start:ex07  
```
```bash
open ex07/periodic_table.html
```
<br>
</details>

---

<details>
<summary>🇷🇺 RUSSIAN VERSION</summary>

## ex00 – My first variables
Функция `my_var()` создаёт переменные разных типов в TypeScript (примитивы: `number`, `string`, `boolean`, `symbol`, `undefined`, `bigint`, а также функция; `объекты`: `Array` (список), `Array` (tuple [42] (кортеж)), `Record` объект-словарь, `Set`, `Map`, `Date`, `RegExp`) и затем выводит каждое значение вместе с определённым типом в рантайме (с помощью собственной функции `detectType()`, так как оператор `typeof` в JavaScript возвращает `"object"` для многих непримитивных структур).

### Usage
```bash
./var.ts
```
<br>

## ex01 – Numbers
Скрипт открывает `numbers.txt` (1–100, разделённые запятой) и выводит числа по одному в строке, без запятых.

```bash
ex01/numbers.ts
```
or
```bash
npm run start:ex01
```
<br>

## ex02 – My first Map and Record
Список пар (музыкант → год рождения) нужно превратить в Map или Record (год → музыкант) и вывести его построчно в формате:

```yaml
1970 : Frusciante
1954 : Vaughan
1948 : Ramone
...
```
```bash
ex02/var_to_map.ts
```
or
```bash
npm run start:ex02_00
```
```yaml
1948 : Ramone
1954 : Vaughan
1970 : Frusciante
...
```
```bash
ex02/var_to_record.ts
```
or
```bash
npm run start:ex02_01
```
<br>

## ex03 – Key search
2 "словаря": `states` и `capital_cities`.
Программа принимает штат (`Oregon`) и выводит столицу (`Salem`).
Если штат не найден → `"Unknown state"`.

```bash
ex03/capital_city.ts Oregon
```
- Salem
```bash
ex03/capital_city_map.ts Ile-De-France
```
- Unknown state
```bash
ex03/capital_city_record.ts
```
```bash
npm run start:ex03_00 Oregon Alabama
```
```bash
npm run start:ex03_01 Oregon Alabama Ile-De-France
```
<br>

## ex04 – Search by value
Те же "словари".
Программа принимает столицу (`Salem`) и выводит штат (`Oregon`).
Если столица не найдена → `"Unknown capital city"`.

```bash
ex04/state.ts Salem
```
- Oregon
```bash
ex04/state_map.ts Paris
```
- Unknown capital city
```bash
ex04/state_record.ts
```
```bash
npm run start:ex04_00 Trenton Alabama
```
<br>

## ex05 – Search by key or value
Принимает строку с элементами, разделёнными запятой. Для каждого элемента определяет:
- это штат,
- это столица,
- или ни то, ни другое.
Игнорирует регистр и лишние пробелы.

```bash
ex05/all_in_map.ts "New jersey, Tren ton, NewJersey, Trenton, toto, , sAlem"
```
```bash
npm run start:ex05_01 "New jersey, Tren ton, NewJersey, Trenton, toto, , sAlem"
```
```
Trenton is the capital of New Jersey
Tren ton is neither a capital city nor a state
NewJersey is neither a capital city nor a state
Trenton is the capital of New Jersey
toto is neither a capital city nor a state
Salem is the capital of Oregon
```
<br>

## ex06 – "Dictionary" sorting
"Словарь" (музыкант → год).
Нужно вывести имена музыкантов, отсортированные по году (возрастание), а при совпадении годов — в алфавитном порядке.

```bash
ex06/my_sort.ts
```
<br>

## ex07 – Periodic table
Используя `periodic_table.txt`, сгенерировать `periodic_table.html`, отображающий таблицу Менделеева в виде HTML-таблицы.
- каждый элемент в `<td>`
- название в `<h4>`
- свойства в `<ul>`
- страница должна быть валидной по W3C

```bash
ex07/periodic_table.ts
```
or
```bash
npm run start:ex07  
```
```bash
open ex07/periodic_table.html
```
</details>