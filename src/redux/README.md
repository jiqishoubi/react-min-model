# 介绍

使用 useContext、useReducer 实现的 dva

# 其它

在 package.json 中为 react 和 react-dom 添加同伴依赖 peerDependencies 的映射，这是为了检测宿主环境中这两项依赖的版本如果低于你规定的最低版本，那么在 npm@3 中会给出警告（npm@1 和 npm@2 中会自动安装）。配置如下：

```
{
  // ...
  "peerDependencies": {
    "react": "^16.8.4",
    "react-dom": "^16.8.4"
  }
}
```
