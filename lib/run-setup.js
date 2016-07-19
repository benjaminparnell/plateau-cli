const Conf = require('conf')
const inquirer = require('inquirer')

function runSetup () {
  const config = new Conf()

  inquirer.prompt([
    { type: 'input', name: 'url', message: 'Enter url of the plateau instance' },
    { type: 'input', name: 'apiKey', message: 'Enter your plateau api key' }
  ])
    .then((answers) => {
      config.set('url', answers.url)
      config.set('apiKey', answers.apiKey)
    })
}

module.exports = runSetup
