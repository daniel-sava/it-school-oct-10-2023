import { useContext, useReducer } from "react";
import { NameContext } from "../contexts/name-context";

const initalTodos = [
    {
        id: 1,
        title: "Todo 1",
        completed: false,
    },
    {
        id: 2,
        title: "Todo 2",
        completed: true,
    },
    {
        id: 3,
        title: "Todo 3",
        completed: false,
    },
];

const todosReducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        case "CHANGE_NAME":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, title: action.title };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export default function Todos() {
    const { name, resetName } = useContext(NameContext);
    const [todos, dispatch] = useReducer(todosReducer, initalTodos);

    const handleComplete = (todo) => {
        dispatch({
            type: "COMPLETE",
            id: todo.id,
        });
    };

    const handleTitleChange = (newTitle, todo) => {
        dispatch({
            type: "CHANGE_NAME",
            id: todo.id,
            title: newTitle,
        });
    };

    return (
        <>
            <h1>Hello, {name}!</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>{todo.title}</label>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleComplete(todo)}
                    ></input>
                    <button
                        onClick={() =>
                            handleTitleChange("Titlu nou setat", todo)
                        }
                    >
                        Change title
                    </button>
                </div>
            ))}
            <button
                onClick={() => {
                    resetName();
                }}
            >
                Reset name
            </button>
        </>
    );
}
