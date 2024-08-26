import qwikPlugin from 'eslint-plugin-qwik';
import tseslint from 'typescript-eslint';
import rootConfig from '../../eslint.config.mjs';

export default tseslint.config({
	extends: [...rootConfig],
	plugins: {
		qwik: qwikPlugin,
	},
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	rules: {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		...qwikPlugin.configs.recommended.rules,

		// Come on, we're better than react
		'qwik/no-react-props': 'error',
		'qwik/prefer-classlist': 'error',
		// This would be incredibly irresponsible and very insecure
		'qwik/jsx-no-script-url': 'error',
		// Come on, clean up after yourself
		'qwik/unused-server': 'error',
		// We use visible task to defer `server$()` from page load (until out of order route loader feature arrives in qwik)
		'qwik/no-use-visible-task': 'off',
	},
});
