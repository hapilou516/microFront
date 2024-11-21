console.log(123);
// 命名空间绑定注册
// umd
((global) => {
  global['purehtml'] = {
    bootstrap: () => {
      console.log('main bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('main mount');
      // 挂载声明周期里更改元素
      document.getElementById('subapp-container').innerHTML = '桃安';
      return Promise.resolve();

    },
    unmount: () => {
      console.log('main unmount');
      return Promise.resolve();
    },
  };
})