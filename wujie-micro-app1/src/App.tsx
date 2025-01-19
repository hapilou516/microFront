import { useEffect } from 'react'
import './App.css'
import './global.d.ts'
function App() {
  useEffect(() => {
    if (window.__POWERED_BY_WUJIE__) {
      window.__WUJIE_MOUNT = () => {}
    }
  }, [])
  return (
    <>
      <div>
        <h1>我是子应用1</h1>
      </div>
    </>
  )
}

export default App
