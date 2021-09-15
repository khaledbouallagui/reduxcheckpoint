import {createStore} from 'redux';
import comb from '../reducer/comb';


const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(comb,DevTools);
export default store;