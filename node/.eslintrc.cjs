module.exports = {
	env: {
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
		},
	},
	extends: ['../.eslintrc.cjs'],
	rules: {},
};
