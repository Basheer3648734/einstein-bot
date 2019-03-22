const fs = require('fs');
const Discord = require('discord.js'); // import discord lib
const request = require('request');
const { prefix, token } = require('./config.json');
const client = new Discord.Client(); // create new discord instance
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


// once logged in log the message
client.once('ready', () => {
	console.log('ready');
})



client.on('message', message => {
	if (!message.content.startsWith(`${prefix}`) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.log(error);
	}

	const data = {
		sentby: message.author.username,
		content: message.content,
		time: message.createdAt
	}
	console.log(data)

})


client.login(token);

