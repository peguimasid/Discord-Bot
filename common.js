function isValidCommand(command) {
  const validCommands = ['sum'];

  return validCommands.includes(command);
}

module.exports = { isValidCommand };
