'use strict';

const arrayUnion = require('array-union');

module.exports = function () {
	this.options.scripts = Object.assign({
		"build": "eslint src --fix & csscomb src && eslint example --fix & csscomb example && npm run clean && babel src -d lib --ignore *.*.js* && cp package.json lib & cp README.md lib & cp LICENSE lib",
		"benchmark": "cd src && for %i in (*.benchmark.js*) do echo. && echo %i && echo. && browserify -t babelify %i | browser-run",
    "deploy": "npm run test && npm run build && npm publish lib/",
    "test": "cd src && for /R %i in (*.test.js*) do browserify -t babelify %i | tap-closer | browser-run | tap-spec"
	}, this.options.scripts || {});



	// Peer dependencies to install
	this.options.peerDependencies = arrayUnion([], this.options.peerDependencies || []);

	// dependencies to install
	this.options.dependencies = arrayUnion([], this.options.peerDependencies || []);

	// Development dependencies to install
	this.options.devDependencies = arrayUnion([
		'babel-cli',
		'babel-plugin-transform-es2015-modules-commonjs',
		'babelify',
		'benchmark',
		'browser-run',
		'browserify',
		'tape',
		'tapes',
		'tap-closer',
		'tap-spec',
		'webpack',
		'webpack-dev-server',
		'node-sass',
		'babel-loader',
		'sass-loader',
		'file-loader',
		'css-loader',
		'style-loader'
	], this.options.devDependencies || []);
};
