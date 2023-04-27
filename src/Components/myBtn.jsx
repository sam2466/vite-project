import React from 'react'
import { useState, useEffect } from 'react'

function myBtn(props) {
  const [count, setCount] = useState(props.initCount) //hook
  const myFun = () => setCount(count + 1);

  useEffect(() => {
    props.passToParent(count);
  }, [count]);

  return (
    <div className="mx-auto my-2">
      <button className="btn btn-dark fs-5" onClick={myFun}>
          count is {count}
      </button>
    </div>
  )
}

export default myBtn