import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      name: "PHIDValidator", // Replace with your package name
    },
    {
      file: "dist/bundle.iife.js",
      format: "iife",
      name: "PHIDValidator", // Replace with your package name
    },
  ],
  plugins: [
    resolve(), // Resolve node_modules packages
    commonjs(), // Convert CommonJS modules to ES6
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
