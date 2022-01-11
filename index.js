const { isValidCommand } = require('./common');
const { Client, Intents } = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith('!')) return;

  const [inputCommand, ...args] = message.content.split(' ');

  const command = inputCommand.slice(1);

  if (!isValidCommand(command)) {
    return message.reply(
      'Meteu essa? Não peguei esse comando ai não parceiro.'
    );
  }

  if (command === 'sum') {
    const sum = args.reduce((acc, curr) => acc + Number(curr), 0);

    message.reply(`A soma dos número é: ${sum}`);
  }
});

client.login(config.BOT_TOKEN);
