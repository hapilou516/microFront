import './App.css'
import WujieReact from 'wujie-react'
function App() {
  const handleMount = () => {
    console.log('子应用加载完成')
  }
  return (
    <>
      <div>
        <WujieReact width={'100%'} height={'100%'} url="http://localhost:5174" name="http://localhost:5174" afterMount={handleMount} alive={true}></WujieReact>
      </div>
    </>
  )
}

export default App
