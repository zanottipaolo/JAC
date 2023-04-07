import logo from "./logo.svg"
import "./App.css"
import Header from "./Header"

const Sum = (name) => {
  return (
    <p>
      {name}
    </p>
  )
}

function App() {
  const name = "Paolo"
  let corso = "BSD22"

  const arrayStudents = [
    {
      name: "Paolo",
      corso: "BSD22",
    },
    {
      name: "Simone",
      corso: "QWERTY11",
    },
    {
      name: "Marco",
      corso: "EDRCFTVGY432",
    },
  ]

  console.log(
    arrayStudents.find((item) => item.name === "fgyhj")
  )

  return (
    <div className='App'>
      <Header/>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          {name} <code>src/App.js</code> and save to reload.
        </p>

        {arrayStudents.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.corso}</p>
          </div>
        ))}

        {arrayStudents
          .filter((item) => item.name === "Paolo")
          .map((item) => (
            <>
              <p>{item.name}</p>
              <p>{item.corso}</p>
            </>
          ))}

        {arrayStudents.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.corso}</p>
          </div>
        ))}

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </div>
    </div>
  )
}

export default App
