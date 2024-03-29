//Esta advertencia fue colocada por el mantenedor de Redux para recomendar el uso de Redux-Toolkit.
//No significa que este deprecado.
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

// Configuración de persistencia para almacenar el estado de Redux en AsyncStorage
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Reducer que aplica la configuración de persistencia al rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export {store, persistor};
