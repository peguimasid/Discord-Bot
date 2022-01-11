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
    return message.reply('Ops! Não reconheci esse comando!');
  }

  console.log(command);
  console.log(args);

  message.reply('Meteu essa pô?');
});

client.login(config.BOT_TOKEN);
