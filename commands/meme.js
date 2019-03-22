const request = require('request');

module.exports = {
	name: 'meme',
	discription: 'returns a meme',
	execute(message, args) {
		message.channel.send('Meme here:')
	}
}