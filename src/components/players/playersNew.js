import List from '../base/lists'
const Players = () => {
    const url = 'http://localhost:3001/players'

    return (
        <div>
            <h1>Players Page</h1>
            <button onClick={() => setFormOpen(true)}>New Player</button>
            <List url={url} />
        </div>

    )
}