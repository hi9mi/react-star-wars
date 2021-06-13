/* eslint-disable no-undef */
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@components': 'src/components',
		'@ui': 'src/components/UI',
		'@constants': 'src/constants',
		'@containers': 'src/containers',
		'@hoc-helpers': 'src/hoc-helpers',
		'@services': 'src/services',
		'@styles': 'src/styles',
		'@utils': 'src/utils',
		'@routes': 'src/routes',
		'@static': 'src/static',
		'@hooks': 'src/hooks',
		'@store': 'src/store',
		'@ducks': 'src/store/ducks',
		'@context': 'src/context',
	})(config);
	return config;
};
