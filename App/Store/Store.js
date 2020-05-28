import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from "../Reducers/rootReducer"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    //whitelist: ['favorites']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
let persistor = persistStore(store)

export default store