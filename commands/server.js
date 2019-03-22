module.exports = {
	name: 'server',
	discription: 'info about the server',
	execute(message, args) {
		message.channel.send(`${message.guild.name}`)
	}
}