// modified version of es2015 and stage-1 presets which use generators rather than regenertor
module.exports = {
  plugins: require('./plugins')({
    commonjs: true,
  }),
}
