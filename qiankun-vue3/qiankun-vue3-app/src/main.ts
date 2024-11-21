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
    render(props)
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