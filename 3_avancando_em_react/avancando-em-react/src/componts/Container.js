import React from 'react'

const Container = ({ children }) => {
  return (
    <div>
        <h2>Esse é o tiítulo do container</h2>
        {children}
    </div>
  )
}

export default Container