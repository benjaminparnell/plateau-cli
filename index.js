#!/usr/bin/env node

const meow = require('meow')
const figures = require('figures')
const chalk = require('chalk')
const firstRun = require('first-run')
const fs = require('fs')
const upload = require('./lib/upload')
const runSetup = require('./lib/run-setup')

const cli = meow(`
  Usage
    $ plateau <file>

  Examples
    $ plateau myimage.png
`)

if (firstRun()) {
  runSetup()
} else {
  const fileStream = fs.createReadStream(cli.input[0])

  upload(fileStream)
    .then((res) => {
      console.log(chalk.green(figures.tick, chalk.white(res.body)))
    })
    .catch((err) => {
      console.log(chalk.red(figures.cross, chalk.white(err.message)))
    })
}

