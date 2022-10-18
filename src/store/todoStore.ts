import { atom } from 'jotai';

import { todomocks } from '@src/mocks/todomocks';
import { Todo } from '@type/Todo';

export const todoStore = atom({
  todos: todomocks,
});

export const getTodoStore = atom((get) => get(todoStore));

export const addTodo = atom(null, (get, set, newTodo: Todo) => {
  const { todos } = get(getTodoStore);
  set(todoStore, { todos: [...todos, newTodo] });
});
export const removeTodo = atom(null, (get, set, id: string) => {
  const { todos } = get(getTodoStore);
  set(todoStore, { todos: todos.filter((todo) => todo.id !== id) });
});
export const toggleTodo = atom(null, (get, set, id: string) => {
  const { todos } = get(getTodoStore);
  set(todoStore, {
    todos: todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    }),
  });
});
export const modifyTodo = atom(null, (get, set, { id, title }) => {
  const { todos } = get(getTodoStore);
  set(todoStore, {
    todos: todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: title,
        };
      }
      return todo;
    }),
  });
});
