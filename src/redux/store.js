import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persitConfig = {
  key: 'root',
  storage
}
// persisting data in the storage using persist
const persistedReducer = persistReducer(persitConfig, rootReducer);

// Creating the store
const store =  configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor};