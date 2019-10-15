import fs from 'fs';
import path from 'path';
import marked from 'marked-ast';
import { toMarkdown } from '../dist/index';
import test from 'tape';
const async = require('async');
const samples = [
  'heading.md',
  'headings.md',
  'simple.md',
  'links.md',
  'blockquote.md',
  'code.md',
  'image.md',
  'tables.md',
  'comment.md',
  'html.md',
  'simple-list.md',
  'list.md',
  'codespan.md',
  'hr.md',
  'double-encoding.md',
];
let loadedSamples;
let expectedOutputs;

test('load all the samples', (t) => {

  const loadFile = (filename, callback) => {
    fs.readFile(path.resolve(__dirname, 'input', filename), { encoding: 'utf-8' }, callback);
  }

  t.plan(1);
  async.map(samples, loadFile, (err, items) => {
    loadedSamples = items;
    t.ifError(err);
  });
});

test('load the expected outputs', (t) => {
  function loadFile(filename, callback) {
    fs.readFile(path.resolve(__dirname, 'expected', filename), { encoding: 'utf-8' }, callback);
  }

  t.plan(1);
  async.map(samples, loadFile, (err, items) => {
    expectedOutputs = items;
    t.ifError(err);
  });
});

samples.forEach((filename, idx) => {
  test('Parse and write: ' + filename, (t) => {
    let ast;
    t.plan(1);

    ast = marked.parse(loadedSamples[idx]);
    t.equal(toMarkdown(ast), expectedOutputs[idx], 'matched expected');
  });
});
