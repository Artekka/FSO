function App() {
  const course = "Half Stack application development";
  const part01 = "Fundamentals of React";
  const exercises01 = 10;
  const part02 = "Using props to pass data";
  const exercises02 = 7;
  const part03 = "State of a component";
  const exercises03 = 14;

  const Header = (props) => (
    <div>
        <h1>{course}</h1>
    </div>
  )

  const Content = (props) => (
    <div>
      <p>{part01}: {exercises01}</p>
      <p>{part02}: {exercises02}</p>
      <p>{part03}: {exercises03}</p>
    </div>
  )

  const Total = (props) => (
    <div>
      <p>Total number of exercises: {exercises01 + exercises02 + exercises03}</p>
    </div>
  )

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App
