if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 Vite 打包输出的 publicPath
  // 挂载window对象中,如果是qiankun环境,则将__webpack_public_path__设置为window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
