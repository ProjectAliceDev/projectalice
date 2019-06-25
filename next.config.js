const typescript = require('@zeit/next-typescript');
const withCompose = require('next-compose-plugins');

module.exports = withCompose([ 
	typescript
]);