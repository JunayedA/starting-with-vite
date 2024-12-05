export default function Todo({haveTodo, isDone}){
    if(isDone === true){
        return <h4>I finished {haveTodo}</h4>
    }
    return <h4>i have to learn {haveTodo}</h4>
}