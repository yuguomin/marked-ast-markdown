import marked from 'marked-ast';
import { toMarkdown } from '../src/index';

const AST = marked.parse(`
## Test

I'm some markdown, and:

1. I'm pretty easy to use
2. I support lists
`);

console.log(AST);
console.log(toMarkdown(AST));
