import React, { forwardRef } from 'react'

const ChildElement = forwardRef((props,ref) => {
  return (
    <div>ChildElement
        <input type='text' ref={ref}/>
    </div>
  )
})

export default ChildElement