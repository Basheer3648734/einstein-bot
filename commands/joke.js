const request = require('request')


module.exports = {
	name: 'joke',
	discription: 'returns a joke',
	execute(message, args) {
		const url = 'https://official-joke-api.appspot.com/random_joke';
		request.get(url, (error, response, body) => {
			const dat = JSON.parse(body);
			return message.channel.send(`${dat.setup} ${dat.punchline}`)
		})
	}
}