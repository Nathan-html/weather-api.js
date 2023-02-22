const dotenv = require("dotenv");

dotenv.config({
    path: "./.env.test"
});

const mandatoryEnv = [
	'key',
	'q'
];

let missingEnvVar = false;
mandatoryEnv.forEach((envVar) => {
	if (typeof process.env[envVar] !== 'undefined') return;
	console.error(`Missing enviornement variable '${envVar}'`);
	missingEnvVar = true
});

if (missingEnvVar) {
  process.exit();
}

/**
 * @type {import('ts-jest').JestConfigWithTsJest}
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};