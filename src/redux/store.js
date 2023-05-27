
// import { createStore } from 'redux';
// import counterReducer from './reducer'
import { store, persistor } from './persistConfig';

// export const store = createStore(counterReducer)
export { store, persistor };

console.log(store.getState())  

