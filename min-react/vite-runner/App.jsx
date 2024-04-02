/*
 * @desc:
 * @Author: Jace
 * @Date: 2024-03-23 18:42:15
 * @LastEditors: Jace
 * @LastEditTime: 2024-03-25 21:38:36
 */
import React from './core/React.js'
// const App = React.createElement('div', { id: 'app' }, 'app')

function Counter ({ num}) {
  return <div>count{ num}</div>
}

function CounterContainer () {
  return <Counter></Counter>
}
// const App = (<div>hi min-react
//   {/* <CounterContainer></CounterContainer> */}
//   <Counter></Counter>
// </div>)

function App () {
  return (<div>hi min-react
  {/* <CounterContainer></CounterContainer> */}
    <Counter num={10 }></Counter>
    <Counter num={20 }></Counter>
</div>)
}
export default App