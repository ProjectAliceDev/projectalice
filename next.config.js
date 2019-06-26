const typescript = require('@zeit/next-typescript');
const images = require('next-images');
const withCompose = require('next-compose-plugins');

module.exports = withCompose([ 
	typescript,
	images
]);