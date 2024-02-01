// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import rootReducer from './reducer';

// // Configuración del middleware
// const middleware = [];

// // Configuración de persistencia
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Crea la tienda sin middleware y con el reducer persistido
// const store = createStore(persistedReducer, applyMiddleware(...middleware));
// const persistor = persistStore(store);

// export { store, persistor };

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Configura AsyncStorage como el motor de almacenamiento
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };


