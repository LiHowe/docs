## 多边形 - Polygon, 折线 - Polyline
<br/>

`Polygon` 实质上就是闭合的折线 (`Polyline`),
`Polygon` 对象继承于 `Polyline`, 

### 使用

多边形与折线的构造方法参数相同, 这里以折线为例:  
`new fabric.Polyline([折线起点到终点的所有点的坐标], 可选的其他设置)`

让我们先试着绘制一个梯形

```ts
// 折线
const pl = new fabric.Polyline([
  { x: 10, y: 30 },
  { x: 20, y: 10 },
  { x: 40, y: 10 },
  { x: 50, y: 30 },
], {
  left: 100,
  top: 100
})
// 多边形
const po = new fabric.Polygon([
  { x: 10, y: 30 },
  { x: 20, y: 10 },
  { x: 40, y: 10 },
  { x: 50, y: 30 },
], {
  left: 150,
  top: 100
})
```

<Image src="https://s2.loli.net/2022/12/01/ACgDhFdkL2NMlxi.png" title="绘制结果, Polyline 与 Polygon 图形相同" />

这时我们可以发现这两个方法创建出来的图形是完全一样的, 这是因为`Polyline` 与 `Polygon` 默认都是
有填充(`fill`) 无边框(`stroke`)的  
我们可以通过 `console.log()` 将其中一个对象的 `fill` 与 `stroke` 打印出来进行查看验证

```ts
console.log(`折线填充:${pl.fill}, 折线边框: ${pl.stroke}`)
// -> 折线填充:rgb(0,0,0), 折线边框: null
```
我们修改上面代码, 为折线设置填充与边框

```ts
pl.set('stroke', '#000')
pl.set('fill', null)
```

这时候折线与多边形会变成它们应有的样子.👇

<Image src="https://s2.loli.net/2022/12/01/M5gsGXeDEbH19iy.png" title="多边形 | 折线" />

### 源码解析

源码解析请前往[源码解析/折线及多边形](/fabric/source/polygon.md)查看

