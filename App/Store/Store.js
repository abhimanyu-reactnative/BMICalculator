import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from "./rootReducer"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['favorites']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
let persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export default store