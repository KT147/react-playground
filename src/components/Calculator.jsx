import { add, multiply, subtract, divide } from "./calculator.js"


function Calculator() {
  return (
        <ul>
            <li>{add(1,2)}</li>
            <li>{multiply(2,3)}</li>
            <li>{subtract(7,2)}</li>
            <li>{divide(5,2)}</li>
        </ul>
  )
}

export default Calculator;