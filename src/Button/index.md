---
title: 按钮
nav:
  path: /component
  title: 组件
group:
  path: /component
  title: Button
---


### 按钮

````tsx
import React, { Component } from 'react'
import  RuibinButton from './index.tsx'

export default class Demo extends Component {
  render() {
    return (
      <div>
        <RuibinButton></RuibinButton>
         &emsp;
        <RuibinButton type="primary"></RuibinButton>
       &emsp;
         <RuibinButton type="danger"> <div>吃饭</div></RuibinButton>
      </div>
    )
  }
}



````
