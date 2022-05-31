import TodoItem from "./TodosItem";
import Todo from '../models/todo';
//import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {

    return (
        <ul className="todos">
            {props.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                />
            ))}

        </ul>)

}
export default Todos