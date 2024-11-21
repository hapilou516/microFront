import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { initGlobalState, registerMicroApps, start } from 'qiankun';
const appData = {
  user: '桃良长安',
  setUser: (newUser) => {
    console.log('User changed in main app:', newUser);
    appData.user = newUser;  // 更新主应用中的状态
  }
};
registerMicroApps([
  {
    name: 'purehtml', // app name registered
    entry: '//localhost:8080',
    container: '#root',
    activeRule: '/app-vanilla',
  },
  {
    name: 'vue3App',
    entry: '//localhost:8081',
    container: '#root',
    activeRule: '/vue3app',
    props: { ...appData },
  }
]);
const {onGlobalStateChange,setGlobalState,offGlobalStateChange} = initGlobalState({user: 'taoan'});
onGlobalStateChange((state, prev) => {
  console.log('主应用监听到状态改变', state, prev);
})
start();