/**
 * file: shared/dataTable/index.js
 *
 * React components to render MDL data-table components
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/data-table
 */

// MDL's js requires these styles to be imported globally
import '!style!css!sass!material-design-lite/src/data-table/_data-table.scss';
import DataTable from './DataTable';

/*** exports ***/
export default DataTable;
export {Head as DataTableHead} from './Head';
export {TH as DataTableTH} from './TH';
export {TD as DataTableTD} from './TD';
