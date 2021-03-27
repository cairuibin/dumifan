---
title: 富文本
nav: 
  path: /component
  title: 富文本
group:
  path: /component
  title: 富文本
---

## 富文本

````jsx
import React from "react";
import "antd/dist/antd.css";
import PriceInput from './index.tsx'
import { Form, Input, Button,message } from "antd";

const _string=`<h1>声明文件原理：深入探究</h1>
                <p>组织模块以提供你想要的API形式保持一致是比较难的。 比如，你可能想要这样一个模块，可以用或不用
                    <code>new</code>来创建不同的类型， 在不同层级上暴露出不同的命名类型， 且模块对象上还带有一些属性。
                </p>
                <p>阅读这篇指定后，你就会了解如果书写复杂的暴露出友好API的声明文件。 这篇指定针对于模块（UMD）库，因为它们的选择具有更高的可变性。
                </p>
                <h2>核心概念</h2>
                <p>如果你理解了一些关于TypeScript是如何工作的核心概念， 那么你就能够为任何结构书写声明文件。
                </p>
                <h3>类型</h3>
                <p>如果你正在阅读这篇指南，你可能已经大概了解TypeScript里的类型指是什么。 明确一下，
                    <em>类型</em>通过以下方式引入：</p>
                <ul>
                    <li>类型别名声明（<code>type sn = number | string;</code>）</li>
                    <li>接口声明（<code>interface I { x: number[]; }</code>）</li>
                    <li>类声明（<code>class C { }</code>）</li>
                    <li>枚举声明（<code>enum E { A, B, C }</code>）</li>
                    <li>指向某个类型的<code>import</code>声明</li>
                </ul>`


class Demo extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    setTimeout(()=>{
      message.info('提交成功，请在控制台查看')
      this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("values",values);
        console.log(values.lailelaodi.toText())

      }
    })
    })
  };

  asyncSetForm=()=>{
      message.info("请等待两秒钟");
     setTimeout(()=>{
      this.props.form.setFieldsValue({
        chifanbaobao:"异步的输入框值",
        lailelaodi:_string
      })
   },2000)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
      <Button type="primary" onClick={()=>{
        this.asyncSetForm()
      }}>点击设置值</Button>  
      <hr/>
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label="吃饭宝宝">
          {getFieldDecorator("chifanbaobao", {
            initialValue: '',
            rules: [{ required: true,message:"请输入吃饭宝宝"}]
          })(<Input placeholder="我是请输入吃饭宝宝placeholder" />)}
        </Form.Item>
        <Form.Item label="来了老弟">
          {getFieldDecorator("lailelaodi", {
            initialValue: '',
            rules: [{ required: true,
             validator: (_, value, callback) => {
                  if(!value) callback('请输入内容');
                  if (value.isEmpty()) {
                    callback('请输入内容')
                  } else {
                    callback()
                  }
                }}]
          })(<PriceInput  
          
          placeholder="我是placeholderplaceholder"
          options={{
            maxLenth:2000
          }}
          />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            确认提交
          </Button>
        </Form.Item>
      </Form>
      </>
    );
  }
}

const WrappedDemo = Form.create( )(Demo);
export default WrappedDemo

````



