const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const RapaaLog = (text, color) => {
	return !color ? chalk.cyan('[Rapaa] ') + chalk.white(text) : chalk.cyan('[Rapaa] ') + chalk.keyword(color)(text)
}


module.exports = {
  RapaaLog,
	color,
	bgcolor
}
