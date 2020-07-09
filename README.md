# TypeScript の基本

## インストール

```
$ npm install -g typescript
```

## コンパイル

- index.ts

```
let hello: string = "hello";
// console.log(hello);
```

- index.ts をコンパイルする

```
$ tsc index.ts
```

- index.js

```
var hello = "hello";
console.log(hello);
```

- ウォッチし、変更箇所をコンパイルさせる

```
$ tsc index --watch
```
