# react-to-mdl (Material Design Lite)

React ES6 components ready to be MDL upgraded

## Install Instructions

1. `npm install material-design-lite --save`.
2. `npm install https://github.com/iporaitech/react-to-mdl/tarball/master --save`

NOTICE:
* this package is not publishe in NPM yet.
* you can also install an specific release by replacing master with the version
i.e., `npm install https://github.com/iporaitech/react-to-mdl/tarball/v0.1.0 --save`

## Usage Example

```javascript

// Import the function you'll use to upgrade your Component and its children
import { mdlUpgrade } from 'react-to-mdl';
import Layout, {
  LayoutHeader,
  LayoutIcon,
  LayoutHeaderRow,
  LayoutTitle,
  LayoutSpacer,
  Navigation,
  NavigationLink,
  LayoutDrawer,
  LayoutContent,
} from 'rmdl/layout';

```


## TODO

1. Other Material Design Lite components
2. Tests
3. Output build to lib and add postinstall script in package.json to create
symlinks from lib to module's root. For example to import 'rmdl/layout' instead
of 'rmdl/lib/layout' we currently output the bundle to / of the package.
4. Lots of other stuff
5. Improve docs and examples
