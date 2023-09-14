import { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0);

  /*
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  */
  
  const handleClick = () => {
    setCounter(counter + 1)
    console.log("Click!")
  }
  
  console.log("Rendering...", counter)

  return (
    <div id="alwaysHaveAnEnclosingTagWhenReturningMoreThanOneElement">
      <div>{counter}</div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}


export default App