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
        const args = [];
        if (argv.book) {
          args.push(argv.book);
        }
        if (argv.output) {
          args.push(argv.output);
        }
        command.exec(args, argv);
      }
    );
  }
  return yargs;
}

function buildCommandOptions(command, arg) {
  for (const option of command.options) {
    const optionDefinition = {
      describe: option.description,
      default: option.defaults,
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

GitBook: https://www.gitbook.com
gitbook-commander: https://github.com/aqrln/gitbook-commander`;

const missingGitBookMessage = `\
GitBook not installed, bailing out.

Please install GitBook in order to use the CLI. Most probably, you'd want \
to do
  npm install --save-dev gitbook
`;

function runCli() {
  if (!gitbook) {
    console.error(missingGitBookMessage);
    return;
  }

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
  run: runCli,
};
