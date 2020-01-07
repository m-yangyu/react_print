# react-print

window的print的react版本的封装，能够支持针对一个button就可以直接实现对应的区域进行打印调用

## 安装

``` javascript

npm install react-print

```

## 使用方法

``` javascript

import ReactPrint from 'react-print'

<div ref="test">
    测试内容
</div>

<ReactPrint
    target={() => this.refs.test}
>
    <Button>打印</Button>
</ReactPrint>

```
