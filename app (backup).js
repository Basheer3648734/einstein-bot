const Discord = require('discord.js'); // import discord lib
const { prefix, token } = require('./config.json');
const client = new Discord.Client(); // create new discord instance

// once logged in log the message
client.once('ready', () => {
	console.log('ready');
})



client.on('message', message => {
	if (!message.content.startsWith(`${prefix}`) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === `speak`) {
		if (!args.length) {
			return message.channel.send(`No arguments were specified`);
		}
		message.delete(0)
			.then(result => console.log(`{from : ${result.author.username} , status : Deleted}`))
			.catch(err => console.log(err));
		return message.channel.send(`${args.join(' ')}`);
	}
	else if (command === 'touch') {
		message.channel.send('here for you.') // sending a message to the server
	}
	else if (command === `server`) {
		message.channel.send(`${message.guild.name}`)
	}
	else if (command === `kick`) { // complete the functionality
		const taggedUser = message.mentions.users.first();
		if (taggedUser) {
			return message.channel.send(`you tried to kick ${taggedUser}`)
		}
		return message.channel.send(`Specifiy someone to kick!`)
	}
	else if (command === `del`) {
		const amount = Number(args[0]);

		if (amount > 2 || amount < 100) {
			message.channel.bulkDelete(amount, true)
			return message.channel.send(`${amount} messages deleted.`)
		}
		return message.channel.send(`Give a valid Amount`)
	}

	const data = {
		sentby: message.author.username,
		content: message.content,
		time: message.createdAt
	}
	console.log(data)

})


client.login(token);