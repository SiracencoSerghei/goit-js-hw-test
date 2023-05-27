import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage'; // Импортируем модуль для сохранения состояния в локальном хранилище
import { persistReducer, persistStore } from 'redux-persist'; // Импортируем функции для настройки Redux Persist

import counterReducer from './reducer'; // Импортируем ваш редюсер

// Конфигурация Redux Persist
const persistConfig = {
  key: 'count', // Ключ, по которому будет сохраняться состояние
  storage, // Используем модуль storage для сохранения в локальном хранилище
};

const persistedReducer = persistReducer(persistConfig, counterReducer); // Создаем новый редюсер с поддержкой Redux Persist

export const store = createStore(persistedReducer); // Создаем store с новым редюсером

export const persistor = persistStore(store); // Создаем persistor, который будет управлять сохранением состояния
