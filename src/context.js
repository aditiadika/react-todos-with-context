import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "Anggur", complete: true },
    { id: 2, text: "Pepaya", complete: false },
    { id: 3, text: "Nanas", complete: true },
    { id: 4, text: "Durian", complete: false }
  ]
});

export default TodosContext;
