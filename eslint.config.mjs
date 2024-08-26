import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config({
	name: '@demosjarco/eslint-config',
	// config with just ignores is the replacement for `.eslintignore`
	ignores: ['**/dist/**'],
	extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, ...tseslint.configs.stylisticTypeChecked, prettierConfig],
	plugins: {
		'@typescript-eslint': tseslint.plugin,
	},
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			ecmaVersion: 'latest',
			jsDocParsingMode: 'type-info',
			lib: ['esnext'],
			projectService: {
				allowDefaultProject: ['eslint.config.mjs'],
				defaultProject: 'tsconfig.json',
			},
			tsconfigRootDir: import.meta.dirname,
		},
	},
	rules: {
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true, ignoreVoidOperator: true }],
		'@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
		'@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
		'@typescript-eslint/no-floating-promises': ['error', { checkThenables: true, ignoreIIFE: true }],
		'@typescript-eslint/restrict-plus-operands': 'warn',
		'no-async-promise-executor': 'off',
	},
});
