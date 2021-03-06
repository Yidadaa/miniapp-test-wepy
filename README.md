## wepy框架中的坑

- 不支持vue中scoped标记，如果添加scoped前缀，会报错。下面是错误示例：
```html
/*wrong usage*/
<style lang="less" scoped> 
</style>
```
- computed属性无法双向绑定到子组件，这个[ISSUE](https://github.com/wepyjs/wepy/issues/300)中说已经解决了，但是经我测试依然不能用sync传到子组件中。
- wepy的组件列表渲染有重大bug，repeat渲染时，父组件的props无法正常传到子组件里，见wepy框架下的[相关ISSUE](https://github.com/wepyjs/wepy/issues/439)。
- 有报错的页面不会引发编译，而且后续编译不会重新报之前已经报过的错，这可能会对调试造成一些困扰。

## 开发中遇到的问题

- 如何获取用户所在的城市？
- 后端API有一些细节待确认，主要是9.1.4获取的用户动态示例，希望后端能提供样例。

## 关于生成代码的大小问题

- 关闭wepy.config.js中的sourceMap选项可以有效减小代码体积
- 编译后的代码比源代码会多出80kb的依赖库，这些库主要是提供wepy的运行时环境

结论：引入wepy框架不会显著增加代码体积。

## UI预览图
![UI](./preview/1.jpg)