const request = require('request');

module.exports = {
	name: 'news',
	discription: 'returns top 10 headline(s) of a specified country',
	execute(message, args) {
		const type = args[0];
		const url = `https://newsapi.org/v2/top-headlines?country=${type}`;

		if (!args.length) {
			return message.channel.send(`Specify parameters : order => country [ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za]`)
		}
		else {
			request.get(url, {
				'headers': {
					'X-Api-Key': 'your_key_here'
				}
			}
				, (error, response, body) => {
					const dat = JSON.parse(body);
					const art = dat.articles;
					if (art == false) {
						return message.channel.send('Country code does not exsist.')
					}
					message.channel.send(`Here are top 10 headlines`);
					for (let i = 0; i < 10; i++) {
						message.channel.send(`${i + 1} : ${art[i].title}`);
						message.channel.send(`-----------------------`)
						console.log(`Current Job Count : ${i}`);
					}


				});
		}

	}
}