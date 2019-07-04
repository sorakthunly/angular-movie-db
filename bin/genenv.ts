/**
 * Automatically looks at all environment variables set
 * and generates them into src/environments/environment.auto.ts
 *
 * Default values are merged in fromm src/environments/environment.default.ts
 * Any defaults that are fine to be committed to the repository should be added
 * to that file.
 */

/* tslint:disable */
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const chalk = require('chalk');
const envalid = require('envalid');
/* tslint:enable */

// Populate the .env config into the OS environment `process.env`
const apiKey = process.env.API_KEY;
const environmentPath = path.join(__dirname, `../src/environments`);

const targetEnvironment = {
	PRODUCTION: envalid.bool({ default: false }),
	API_KEY: envalid.str()
};

const retrievedEnvironment = envalid.cleanEnv(process.env, targetEnvironment);

console.log((chalk as any).magenta('Generating environment.auto.ts'));

const struct = Object.keys(targetEnvironment).reduce((source, key) => {
	const camelKey = _.camelCase(key);
	source[camelKey] = retrievedEnvironment[key];

	return source;
}, {});

const output = JSON.stringify(struct, null, '  ');
const content = `// tslint:disable
// NOTE: DO NOT CHANGE THIS!
//
// This file was auto-generated from environment variables defined in bin/genenv.
// You should change your environment variables then run 'npm run genenv' if you want to change something.
export const environment = ${output};
`;

fs.writeFileSync(path.join(`${environmentPath}/environment.auto.ts`), content);
console.log((chalk as any).green('\nThe environment file environment.auto.ts has been generated successfully\n'));
