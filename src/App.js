import React, {useState} from 'react'

export default function Test() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    console.log(`clicked ${count} times`)
  }
  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={handleClick}>Click {count} times</button>
    </>
  )
}