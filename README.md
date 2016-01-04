# Shareable babel presets

Personal favorite babel presets, includes:

 - es2015
 - stage3
 - stage2
 - stage1
 - async-to-generator (for more debuggable async code)

## install

```sh
npm install --save-dev @spalger/babel-presets
## initialize your .babelrc file if you please
cp node_modules/\@spalger/babel-presets/.babelrc.example .babelrc
```

## usage

Add this to your .babelrc file

```json
{
  "presets": [
    "@spalger/babel-presets"
  ]
}
```
