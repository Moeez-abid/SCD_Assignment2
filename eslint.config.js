import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      // Turn most rules into warnings or disable them
      "no-unused-vars": "off",
      "no-undef": "off",
      "semi": ["warn", "always"],
      "quotes": ["warn", "double"],
    },
  },
];
