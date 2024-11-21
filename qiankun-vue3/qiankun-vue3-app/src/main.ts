import "./public-path"
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import {createApp} from "vue"
import App from "./App.vue"
import "./style.css"
console.log("qiankunWindow",qiankunWindow.__POWERED_BY_QIANKUN__);  // 查看当前是否是用qiankun加载的

let app:any = null
function render(props: any) {
  const {container} = props
  app = createApp(App)
  app.mount(container ? container.querySelector("#app") : "#app")
}
renderWithQiankun({
  bootstrap: () => {
    console.log("react app bootstraped")
    return Promise.resolve()
  },
  mount(props) {
    console.log("react app mount")
    // document.body.innerHTML = "react app mount"
    console.log(props);
    console.log(props.singleSpa);
    
    render(props)
    // props.onGlobalStateChange && props.onGlobalStateChange((state, prev) => {
    //   console.log("react app state change", state, prev)
    // })
      // 接收全局状态变化
  props.onGlobalStateChange((state, prev) => {
    console.log('子应用监听到状态变化:', state, prev);
  }, true); // true 表示立即以当前全局状态触发一次回调

  // 更改全局状态
  props.setGlobalState({ user: 'newUser' });


  /* 局部变量的双向数据绑定 */
  console.log('Initial user:', props.user);

  // 假设有某个事件触发用户信息的更新
  function updateUser() {
    props.setUser('newUsername');
  }

  // 模拟更新用户操作
  setTimeout(updateUser, 3000);
    return Promise.resolve()
  },

  update() {
    console.log("react app update")
    return Promise.resolve()
  },
  unmount() {
    console.log("react app unmount")
    return Promise.resolve()
  }
})
// 不是跑在qiankun中,直接渲染,如果没有这段代码，子应用无法单独渲染
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}