import { eslintConfig } from "@toridoriv/eslint-config";

/**
 * @import {Linter} from "eslint"
 */

/**
 * Add here any Eslint configuration that you want to use in your project. You can import
 * it from the eslint-config library or create your own.
 *
 * @type {Linter.Config[]}
 */
export default [
  // Add your own ignore patterns here.
  eslintConfig.ignorePatterns(
    "package-lock.json",
    "package.json",
    "*/node_modules/**/*",
    "LICENSE.md",
  ),
  ...eslintConfig.javascript.browser,
  ...eslintConfig.javascript.node,
  eslintConfig.typescript,
  ...eslintConfig.jsdoc,
  eslintConfig.serialization.json,
  eslintConfig.serialization.jsonc,
  eslintConfig.markup.markdownWithPrettier,
  eslintConfig.markup.css,
  eslintConfig.prettier,
];
