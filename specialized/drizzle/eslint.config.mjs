import drizzlePlugin from 'eslint-plugin-drizzle';
import tseslint from 'typescript-eslint';
import rootConfig from '../../eslint.config.mjs';

export default tseslint.config({
	extends: [...rootConfig],
	plugins: {
		drizzle: drizzlePlugin,
	},
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	rules: {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		...drizzlePlugin.configs.recommended.rules,
	},
});
