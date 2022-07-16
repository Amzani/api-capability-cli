oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g api-capability-cli
$ api-capability-cli COMMAND
running command...
$ api-capability-cli (--version)
api-capability-cli/0.0.0 darwin-x64 node-v16.13.1
$ api-capability-cli --help [COMMAND]
USAGE
  $ api-capability-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`api-capability-cli hello PERSON`](#api-capability-cli-hello-person)
* [`api-capability-cli hello world`](#api-capability-cli-hello-world)
* [`api-capability-cli help [COMMAND]`](#api-capability-cli-help-command)
* [`api-capability-cli plugins`](#api-capability-cli-plugins)
* [`api-capability-cli plugins:install PLUGIN...`](#api-capability-cli-pluginsinstall-plugin)
* [`api-capability-cli plugins:inspect PLUGIN...`](#api-capability-cli-pluginsinspect-plugin)
* [`api-capability-cli plugins:install PLUGIN...`](#api-capability-cli-pluginsinstall-plugin-1)
* [`api-capability-cli plugins:link PLUGIN`](#api-capability-cli-pluginslink-plugin)
* [`api-capability-cli plugins:uninstall PLUGIN...`](#api-capability-cli-pluginsuninstall-plugin)
* [`api-capability-cli plugins:uninstall PLUGIN...`](#api-capability-cli-pluginsuninstall-plugin-1)
* [`api-capability-cli plugins:uninstall PLUGIN...`](#api-capability-cli-pluginsuninstall-plugin-2)
* [`api-capability-cli plugins update`](#api-capability-cli-plugins-update)

## `api-capability-cli hello PERSON`

Say hello

```
USAGE
  $ api-capability-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Amzani/api-capability-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `api-capability-cli hello world`

Say hello world

```
USAGE
  $ api-capability-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `api-capability-cli help [COMMAND]`

Display help for api-capability-cli.

```
USAGE
  $ api-capability-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for api-capability-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `api-capability-cli plugins`

List installed plugins.

```
USAGE
  $ api-capability-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ api-capability-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `api-capability-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ api-capability-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ api-capability-cli plugins add

EXAMPLES
  $ api-capability-cli plugins:install myplugin 

  $ api-capability-cli plugins:install https://github.com/someuser/someplugin

  $ api-capability-cli plugins:install someuser/someplugin
```

## `api-capability-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ api-capability-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ api-capability-cli plugins:inspect myplugin
```

## `api-capability-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ api-capability-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ api-capability-cli plugins add

EXAMPLES
  $ api-capability-cli plugins:install myplugin 

  $ api-capability-cli plugins:install https://github.com/someuser/someplugin

  $ api-capability-cli plugins:install someuser/someplugin
```

## `api-capability-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ api-capability-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ api-capability-cli plugins:link myplugin
```

## `api-capability-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ api-capability-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ api-capability-cli plugins unlink
  $ api-capability-cli plugins remove
```

## `api-capability-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ api-capability-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ api-capability-cli plugins unlink
  $ api-capability-cli plugins remove
```

## `api-capability-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ api-capability-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ api-capability-cli plugins unlink
  $ api-capability-cli plugins remove
```

## `api-capability-cli plugins update`

Update installed plugins.

```
USAGE
  $ api-capability-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
