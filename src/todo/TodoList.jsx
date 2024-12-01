

const TodoList = ({ tasks, toggleIsFinished, deleteTask }) => {
    return (
        <>
            {
                tasks.map(task => (<div className="flex flex-col gap-5">
                    <h1 key={task.id} onClick={() => toggleIsFinished(task.id)} className={`cursor-pointer ${task.isFinished && "line-through"}`}>{task.title}</h1>
                    <button className="border border-black bg-transparent px-5 py-1.5 font-bold" onClick={() => deleteTask(task.id)}>delet</button>
                </div>

                ))

            }

        </>
    )
}

export default TodoList;