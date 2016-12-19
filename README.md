# react-to-mdl (Material Design Lite)

React ES6 components ready to be MDL upgraded

**NOTICE:** The default branch for this repo is **develop**. Check the
[README](https://github.com/iporaitech/pwr2-docker/blob/master/README.md) on
master to see what's in the last release.

## Install Instructions

1. `npm install material-design-lite --save`.
2. `npm install https://github.com/iporaitech/react-to-mdl/tarball/master --save`

NOTICE:
* this package is not publishe in NPM yet.
* you can also install an specific release by replacing master with the version
i.e., `npm install https://github.com/iporaitech/react-to-mdl/tarball/v0.1.0 --save`

## Usage Examples

See [examples](examples). Just replace `src` with `react-to-mdl` when importing
from the package installed in your project.

You might also want to take a look at the files used to setup a
[dev server](server.js) with `HotModuleReplacementPlugin`.

Notice that the component `NavigationLink` is based on `Link` from **react-router**.

## TODO

1. Other Material Design Lite components
2. Tests and linting.
3. Output build to lib and add postinstall script in package.json to create
symlinks from lib to module's root. For example to import 'rmdl/layout' instead
of 'rmdl/lib/layout' we currently output the bundle to / of the package.
4. Improve docs and examples (leverage pwr2 docs infrastructure)
5. Lots of other stuff.
