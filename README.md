# react-to-mdl (Material Design Lite)

React ES6 components ready to be MDL upgraded

## Usage Instructions

1. `npm install material-design-lite --save`.
2. Install (--save) this package directly from GitHub because it ain't on NPM yet
3. Import the mdlUpgrade, a function that receives a React component and calls
material-design-lite functions to "upgrade"

  `import { mdlUpgrade } from 'rmdl';`
4. Import the corresponding components, for eample
```javascript
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
5. Use the components to compose your component.
6. Pass your component to mdlUpgrade to make your components look like Material
Design Lite

## TODO

1. Other Material Design Lite components
2. Tests
3. Output build to lib and add postinstall script in package.json to create
symlinks from lib to module's root. For example to import 'rmdl/layout' instead
of 'rmdl/lib/layout' we currently output the bundle to / of the package.
4. Lots of other stuff
5. Improve docs and examples
