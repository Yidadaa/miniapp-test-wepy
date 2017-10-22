## wepy框架中的坑

- 不支持vue中scoped标记，如果添加scoped前缀，会报错。下面是错误示例：
```html
/*wrong usage*/
<style lang="less" scoped> 
</style>
```

## 开发中遇到的问题

- 如何获取user的城市？