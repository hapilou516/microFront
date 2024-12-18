import { useState, useEffect } from 'react'
const importScript = (() => {
  // 自执行函数，创建一个闭包，保存 cache 结果
  const cache = {}
  return (url) => {
    // 如果有缓存，则直接返回缓存内容
    if (cache[url]) return Promise.resolve(cache[url])

    return new Promise((resolve, reject) => {
      // 保存最后一个 window 属性 key
      const lastWindowKey = Object.keys(window).pop()

      // 创建 script
      const script = document.createElement('script')
      script.setAttribute('src', url)
      document.head.appendChild(script)

      // 监听加载完成事件
      script.addEventListener('load', () => {
        document.head.removeChild(script)
        // 最后一个新增的 key，就是 umd 挂载的，可自行验证
        const newLastWindowKey = Object.keys(window).pop()

        // 获取到导出的组件
        const res = lastWindowKey !== newLastWindowKey ? (window[newLastWindowKey]) : ({})
        const Com = res.default ? res.default : res

        cache[url] = Com

        resolve(Com)
      })

      // 监听加载失败情况
      script.addEventListener('error', (error) => {
        reject(error)
      })
    })
  }
})()

export const UmdComponent = ({ url, children, umdProps = {} }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [UmdCom, setUmdCom] = useState(null)

  useEffect(() => {
    if (!url) return;
    importScript(url)
      .then((Com) => {
        // 这里需要注意的是，res 因为是组件，所以类型是 function
        // 而如果直接 setUmdCom 可以接受函数或者值，如果直接传递 setUmdCom(Com)，则内部会先执行这个函数，则会报错
        console.log("组件",Com);
        
        // 所以值为函数的场景下，必须是 如下写法
        // setUmdCom(() => Com)
      })
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  if (!url) return null;
  if (error) return <div>error!!!</div>
  if (loading) return <div>loading...</div>
  if (!UmdCom) return <div>加载失败，请检查</div>;

  return <UmdCom {...umdProps}>{children}</UmdCom>
}
