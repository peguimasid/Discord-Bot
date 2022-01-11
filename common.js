function isValidCommand(command) {
  const validCommands = ['find', 'ping', 'fala'];

  return validCommands.includes(command);
}

module.exports = { isValidCommand };
