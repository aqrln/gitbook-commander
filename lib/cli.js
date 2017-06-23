'use strict';

const gitbook = require('gitbook');
const yargs = require('yargs');

function buildCommands() {
  for (const command of gitbook.commands) {
    yargs.command(
      command.name,
      command.description,
      (arg) => {
        buildCommandOptions(command, arg);
      },
      (argv) => {
        command.exec(argv._.slice(1), argv);
      }
    );
  }
  return yargs;
}

function buildCommandOptions(command, arg) {
  for (const option of command.options) {
    const optionDefinition = {
      describe: option.description,
      default: option.defaults
    };

    // We don't want it to be an own property of `optionDefinition` in the case
    // it's not present, so just copying the value in the object literal above
    // won't work if it is undefined.
    if (option.values) {
      optionDefinition.choices = option.values;
    }

    arg.option(option.name, optionDefinition);
  }
}

const epilogueMessage = `\
Run $0 <command> --help to see options of specific commands

GitBook: https://www.gitbook.com/
gitbook-cli-lite: https://github.com/aqrln/gitbook-cli-lite`;

function runCli() {
  buildCommands()
    .help()
    .usage('Usage:\n  $0 <command>')
    .version()
    .epilogue(epilogueMessage)
    .demandCommand(1, 'Please choose a command')
    .recommendCommands()
    .strict()
    .argv;
}

module.exports = {
  run: runCli
};
