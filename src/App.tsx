import './App.css'

function App() {
  return (
    <>
      <div>
        Here's an environment variable: <b>{import.meta.env.VITE_APP_TITLE}</b>
      </div>
    </>
  )
}

export default App
