import { useState } from 'react'
import './App.css'
import { UmdComponent } from './UmdComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div>
    <div>动态组件示例：</div>
    <UmdComponent url='https://unpkg.com/react-draggable@4.4.4/build/web/react-draggable.min.js' 
      umdProps={{
        onDrag(e) {
          console.log(e)
        }
    }}>
      <div style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}></div>
    </UmdComponent>
  </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
