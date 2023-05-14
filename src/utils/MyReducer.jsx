// Инициализация начального состояния
export const initialState = { count: 0 };

// Редюсер для изменения состояния
function MyReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default MyReducer;