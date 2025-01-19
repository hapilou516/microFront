import { useEffect, useState } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    if (window.__POWERED_BY_WUJIE__) {
      window.__WUJIE_MOUNT = () => {}

      window.__WUJIE_MOUNT()
    }
  }, [])
  return (
    <>
      <div>
        <h1>我是子应用</h1>
      </div>
    </>
  )
}

export default App
