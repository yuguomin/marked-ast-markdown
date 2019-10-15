## what is this
use [marked-ast](https://github.com/pdubroy/marked-ast) get Markdown AST, then use this package will transform AST to Markdown file.

## install
add this code in your project package.json/dependencies
```
```

need global devDependencies
[`node`](https://nodejs.org/en/download/package-manager/)
[`TypeScript`](https://ts.xcatliu.com/introduction/get-typescript)
[`yarn`](https://yarn.bootcss.com/docs/install/#mac-stable)

install packages
```shell
yarn install
```

## how to use
``` TypeScript
import marked from 'marked-ast';
import { toMarkdown } from 'marked-ast-markdown';
const AST = marked.parse(`
## Test

I'm some markdown, and:

1. I'm pretty easy to use
2. I support lists
`);
toMarkdown(AST);
```


## command

### start
```shell
yarn start
```
this command will execute ./examples/index.ts file, tell how to use

### test
```shell
yarn test
```
this command will execute ./test/index.ts, test some markdown files in ./test/input/ folder, get these files AST,
and use this tool to transfrom AST to markdown file, compared with ./test/expected/ markdown files.

### dev
``` shell
yarn dev
```
this command will parse src to dist, ts to js.

### build
```shell
yarn build
```
this command will rewritten dist folder.
