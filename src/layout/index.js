/**
 * file: src/layout/index.js
 *
 * React components to render MDL layout components
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/layout
 */

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/layout/_layout.scss'; 
import Layout from './Layout';

/*** exports ***/
export default Layout;
export {Content as LayoutContent} from './Content';
export {Drawer as LayoutDrawer} from './Drawer';
export {Header as LayoutHeader} from './Header';
export {HeaderRow as LayoutHeaderRow} from './HeaderRow';
export {Icon as LayoutIcon} from './Icon';
export {Navigation} from './Navigation';
export {NavigationLink} from './NavigationLink';
export {Spacer as LayoutSpacer} from './Spacer';
export {Title as LayoutTitle} from './Title';
