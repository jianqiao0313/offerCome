---
title: flex
date: 2023-06-13 20:00:00
updated: 2023-06-13 20:00:00
tags: css flex
---

# flex-direction 属性

## 说明

```css
.main {
    flex-direction: row | row-reverse | column | column-reverse;
}
```
flex-direction决定了主轴的方向。

- **row（默认值）**：主轴为水平方向，起点在左端
- **row-reverse**：主轴为水平方向，起点在右端
- **column**：主轴为垂直方向，起点在上沿
- **column-reverse**：主轴为垂直方向，起点在下沿

## 演示

<iframe  
  width=100%
  height=699px
  src="http://127.0.0.1:5500/code/css/flex/flex-direction.html"  
  frameborder=0  
  allowfullscreen>
</iframe>

# flex-wrap 属性

## 说明

```css
.main {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```
flex-wrap属性定义，如果一行排不下，如何换行

- **nowrap（默认值）**：不换行，所有元素缩小后挤一挤
- **wrap**：换行，在第一行上方
- **wrap-reverse**：换行，第一行在下方

## 演示

<iframe  
  width=100%
  height=503px
  src="http://127.0.0.1:5500/code/css/flex/flex-wrap.html"  
  frameborder=0  
  allowfullscreen>
</iframe>

# flex-flow 属性

## 说明

```css
.main {
    flex-flow: <flex-direction> <flex-wrap>
}
```

flex-flow是由 **flex-direction** 和 **flex-wrap** 两个属性组合的。
- **默认值**：row nowrap

# justify-content 属性

## 说明

```css
.main {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

justify-content属性决定主轴的对齐方式。

- **flex-start（默认值）**：左对齐
- **flex-end**：右对齐
- **center**：居中
- **space-between**：两端对齐，中间的间隔相等
- **space-around**：每个元素周围的间隔相等，类似于每个元素周围加了个padding

## 演示

<iframe  
  width=100%
  height=854px
  src="http://127.0.0.1:5500/code/css/flex/justify-content.html"  
  frameborder=0  
  allowfullscreen>
</iframe>

