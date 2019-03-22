module.exports = {
	name: 'kick',
	discription: 'specify user to kick',
	execute(message, args) {
		const taggedUser = message.mentions.users.first();
		if (taggedUser) {
			return message.channel.send(`you tried to kick ${taggedUser}`)
		}
		return message.channel.send(`Specifiy someone to kick!`)
	}
}