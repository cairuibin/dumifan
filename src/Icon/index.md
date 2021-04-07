---
title: 图标
nav:
  path: /component
  title: 组件
group:
  path: /component
  title: Icon
---

## 图标

> 哈哈哈

```jsx
import React, { Component } from 'react';
import * as Icon from './index.tsx';

export default class RuiBinIcon extends Component {
  copy = Icondom => {
    const textField = document.createElement('textarea');
    textField.innerText = `<${Icondom} w={40} h={40}/>`;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert('复制成功');
  };
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(Icon).map(v => {
          const Icondom = Icon[v];
          return (
            <span
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 82,
                border: '1px solid #ebedf1',
                margin: 10,
                padding: 10,
              }}
              key={v}
            >
              <Icondom w={24} h={24} />
              <button
                onClick={() => this.copy(v)}
                style={{
                  cursor: 'pointer',
                  fontSize: 12,
                  padding: 2,
                  height: 18,
                  lineHeight: '10px',
                  marginTop: 5,
                }}
              >
                复制
              </button>
            </span>
          );
        })}
      </div>
    );
  }
}
```
