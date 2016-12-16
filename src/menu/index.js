/**
 * file: shared/menu/index.js
 *
 * React components to render MDL menu components
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/menu
 */

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/menu/_menu.scss';
import Menu from './Menu';

/*** exports ***/
export default Menu;
export {Item as MenuItem} from './Item';
