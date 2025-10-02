## Starting

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

</details>