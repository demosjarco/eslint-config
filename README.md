[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/demosjarco/eslint-config/badge)](https://securityscorecards.dev/viewer/?uri=github.com/demosjarco/eslint-config)[![Socket Badge](https://socket.dev/api/badge/npm/package/@demosjarco/eslint-config)](https://socket.dev/npm/package/@demosjarco/eslint-config)

# `@demosjarco/eslint-config`

My personal [TypeScript ESLint](https://typescript-eslint.io/) and [ESLint](https://eslint.org/) config (new flat config only).

> [!NOTE]
> For old eslint plugins (non flat config format) used, I automatically convert them to flat config style

## Includes

-   [x] ESLint Recommended
-   [x] [TypeScript ESLint With Type Checking](https://typescript-eslint.io/users/configs/#recommended-type-checked)
-   [x] [TypeScript ESLint Stylistic With Type Checking](https://typescript-eslint.io/users/configs/#stylistic-type-checked)
-   [x] [Prettier](https://prettier.io/docs/en/integrating-with-linters.html)
-   [x] [Drizzle](https://orm.drizzle.team/docs/eslint-plugin#rules) [^1][^2]
-   [x] [Qwik](https://qwik.dev/docs/advanced/eslint/) [^1][^3]

[^1]: Uses separate config that already includes base config

[^2]: Import from `@demosjarco/eslint-config/drizzle`

[^3]: Import from `@demosjarco/eslint-config/qwik`

## Usage

**Install**:

```bash
$ npm i -D @demosjarco/eslint-config
```

**Edit `eslint.config.mjs`**:

```js
import configNameGoesHere from '@demosjarco/eslint-config';
// or
import configNameGoesHere from '@demosjarco/eslint-config/drizzle';
// or
import configNameGoesHere from '@demosjarco/eslint-config/qwik';

export default tseslint.config({
	// ...
	extends: [configNameGoesHere],
});
```
