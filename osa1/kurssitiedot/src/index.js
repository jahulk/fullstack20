import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => {
   return (
      <div>
         <Part part={parts[0]} />
         <Part part={parts[1]} />
         <Part part={parts[2]} />
      </div>
   )
}

const Part = ({ part }) => (
   <p>
      {part.name} {part.exercises}
   </p>
)

const Total = ({ parts }) => {
   let tot = parts.reduce((acc, curr) => acc + curr.exercises, 0)

   return <p>Number of exercises {tot}</p>
}

const App = () => {
   const course = {
      name: 'Half Stack application development',
      parts: [
         {
            name: 'Fundamentals of React',
            exercises: 10
         },
         {
            name: 'Using props to pass data',
            exercises: 7
         },
         {
            name: 'State of a component',
            exercises: 14
         }
      ]
   }

   return (
      <div>
         <Header name={course.name} />
         <Content parts={course.parts} />
         <Total parts={course.parts} />
      </div>
   )
}

ReactDOM.render(<App />, document.getElementById('root'))
