import React from 'react'
import { useState, useEffect } from 'react'

function myBtn(props) {
  const [count, setCount] = useState(props.initCount) //hook
  const increaseone = () => setCount(count + 1);
  const decreaseone = () => setCount(count -1);
  const changeInput = (e) => setCount(e.currentTarget.value * 1);

  useEffect(() => {
    props.passToParent(count);
  }, [count]);

  return (
    <div className="mx-auto my-2 ">
      <div className="input-group">
        <div>
          
        </div>
        <div className="form col-auto">
          <input 
            type="text" 
            value={count}
            className="form-control bg-light text-center fs-5" 
            onChange={changeInput}
          />
        </div>
        
        <div className="btn-group col-auto">
          <button className="btn btn-success fs-6 mx-auto" onClick={increaseone}>
            <i className="bi bi-plus"></i>
          </button>
          <button className="btn btn-danger fs-6 mx-auto" onClick={decreaseone}>
            <i className="bi bi-dash"></i>
          </button>
        </div>
      </div>
      
  
      
    </div>
  )
}

export default myBtn