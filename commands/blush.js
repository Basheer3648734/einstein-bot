const request = require('request')

module.exports = {
	name: 'blush',
	discription: 'returns a compliment',
	execute(message, args) {
		const url = ' https://complimentr.com/api ';
		const user = message.author.username;
		request.get(url, (error, response, body) => {
			const dat = JSON.parse(body);
			return message.channel.send(`@${user} ${dat.compliment}`);
		})
	}
}