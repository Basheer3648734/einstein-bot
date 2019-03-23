const request = require('request');
var snoowrap = require('snoowrap');


module.exports = {
	name: 'meme',
	discription: 'returns a meme',
	execute(message, args) {
		message.channel.send('meme')
	}
}