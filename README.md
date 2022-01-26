# 介绍

基于使用 useContext、useReducer 实现的 dva

# 状态管理 `generateModel`

未使用 react-redux  
使用 useContext、useReducer 实现了一个 dva 的状态管理，核心代码`src/redux/index.js`  
最终暴露出来一个`generateModel`

## 用法

generateModel 可以接收数组、对象、requie()、例如下面 global 和 login 是一个类似于 dva 的 model 的对象。  
connectProvider 是一个高阶组件，给传入的组件包裹上 Provider。  
然后在组件中使用 useModel 就可以拿到 state 和 dispatch 了。

```
// Parent.jsx
export const { connectProvider, useModel } = generateModel([global, login])

function Parent() {
    const { state, dispatch, getLoading } = useModel() // 可以拿到state、dispatch
    return <Detail/>
}
export default connectProvider(Parent)
```

```
// Detail.jsx
import { useModel } from './Parent.jsx'

function Detail() {
    const { state } = useModel() // 可以拿到state、dispatch
    const { count } = state
    return <div>{count}</div>
}
export default connectProvider(Parent)
```

具体可以查看工程中的示例。。。
