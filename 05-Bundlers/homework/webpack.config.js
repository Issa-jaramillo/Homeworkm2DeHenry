module.exports ={
  mode:'development',
    entry: "./browser/app.js",
    output: {
      path: __dirname + "/bundle",
      filename: "bundle.js",
    },
};