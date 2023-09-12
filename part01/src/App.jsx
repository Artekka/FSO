import Hello from "./ComponentPractice";

function App(props) {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  const userInfo = {
    name: "Jason",
    age: 37
  }
  

  const Header = (props) => {
    console.log(props);
    return <h1>{course.name}</h1>;
  }

  const Content = (props) => {
    console.log(props);
    return;
  }

  const Total = (props) => {
    console.log(props);
    return <p>Total number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
  }
  
  const { counter } = props
  
  return (
    <div>
      <Header course={course} />
      <Content parts={course}/>
      <Total parts={course} />
      <Hello
        name={userInfo.name}
        age={userInfo.age}
      />
      {counter}
    </div>
  )
}

export default App
