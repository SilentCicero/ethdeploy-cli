## ethdeploy-cli | webpack like cli for smart-contract deployment

A CLI for the [ethdeploy](http://github.com/silentcicero/ethdeploy) Ethereum smart-contract deployment staging facility.

## Installation

```
npm install -g ethdeploy-cli
```

## Run

```
ethdeploy ./ethdeploy.config.js ./environments.json
```

## Example
First install and run [ethereumjs-testrpc](http://github.com/ethereumjs/ethereumjs-testrpc), then run the example `ethdeploy` cli.

```
npm install -g ethereumjs-testrpc
testrpc
npm run example
```

## Example CLI Output

```
> ethdeploy ./example/ethdeploy.config.js ./example/

ethdeploy [2016-07-29T04:06:44.117Z]:  Environment 'morden' configured, starting contract deployment...
ethdeploy [2016-07-29T04:06:44.146Z]:  Deploying 'SimpleStore' to environment 'morden'...
ethdeploy [2016-07-29T04:06:44.682Z]:  Deploying 'SimpleStoreService' to environment 'morden'...
ethdeploy [2016-07-29T04:06:44.682Z]:  Deploying 'SomeCustomInstance' to environment 'morden'...
ethdeploy [2016-07-29T04:06:48.734Z]:  All contracts deployed successfully to environment 'morden'!
ethdeploy-build [2016-07-29T04:06:48.737Z]:  build output file already exists... morphing and modifying with Object.assign...
ethdeploy-build [2016-07-29T04:06:48.741Z]:  File Generated: './example/environments.json' [modified] successfully!

    Details:
      Generation Time: 2016-07-29T04:06:48.741Z
      File Generated: ./example/environments.json [modified]
```

## Future/Todo
 - More build options (i.e. --override, --morph etc.)
 - Modularize out `build` util module

## Licence

Released under the MIT License, see [LICENSE.md](LICENSE.md) file.
