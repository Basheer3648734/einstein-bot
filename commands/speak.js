module.exports = {
	name: 'speak',
	discription: 'specify args to write a message through the bot',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`No arguments were specified`);
		}
		message.delete(0)
			.then(result => console.log(`{from : ${result.author.username} , status : Deleted}`))
			.catch(err => console.log(err));
		return message.channel.send(`${args.join(' ')}`);
	}
}