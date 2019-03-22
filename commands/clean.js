module.exports = {
	name: 'clean',
	discription: 'delete a specified amount of messages',
	execute(message, args) {
		const amount = Number(args[0]);

		if (amount > 2 || amount < 100) {
			message.channel.bulkDelete(amount, true)
			return message.channel.send(`${amount} messages deleted.`)
		}
		return message.channel.send(`Give a valid Amount`)
	}
}