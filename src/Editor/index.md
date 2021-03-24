---
title: 富文本编辑器
nav: 
  path: /component
  title: dfdf
group:
  path: /component
  title: dfdf
---

````jsx

import React,{PureComponent } from 'react'
import BraftEditor from 'braft-editor'
import 'antd/dist/antd.css';
import 'braft-editor/dist/index.css'
import { Form, Input, Button } from 'antd'
class PriceInput extends PureComponent {
  constructor(props) {
    super(props);
    const value = props.value || '';
    this.state = {
         value:value
    };
  }
  componentDidMount () {
    // 异步设置编辑器内容
    setTimeout(() => {
      this.props.form.setFieldsValue({
        contenteeee: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
      })
    }, 1000)

  }
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    console.log(this.props)

    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }
  render() {
    const { size } = this.props;
    const {value} = this.state;
   console.log(value)
    return (
        <BraftEditor
               value={value}
                className="my-editor"
                controls={this.props.controls}
                placeholder="请输入正文内容"
            />
    );
  }
}
class FormDemo extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault() 
   
    this.props.form.validateFields((error, values) => {
      console.log(values.contenteeee,'values.contenteeee')
      if (!error) {
        // const submitData = {
        //   title: values.title,
        //   content:  values.content.toHTML()// values.content.toRAW() // or values.content.toHTML()
        // }
        console.log(values,'values')
      }
    })

  }
  render () {
    const { getFieldDecorator } = this.props.form
    const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media' ]
    return (
      <div className="demo-container">
        <Form onSubmit={this.handleSubmit}>
         
          <Form.Item  label="文章正文">
            {getFieldDecorator('contenteeee', {
              validateTrigger: 'onBlur',
              initialValue:BraftEditor.createEditorState('<p>Hello qwwwwwwwwwwwwwwwwwwwwwwwwwwwww<b>World!</b></p>'),
              // valuePropName:'content',
              rules: [{
                required: true,
                // validator: (_, value, callback) => {
                //   if (value.isEmpty()) {
                //     callback('请输入正文内容')
                //   } else {
                //     callback()
                //   }
                // }
              }],
            })(
              <PriceInput controls={controls} {...this.props}/>
            )}
          </Form.Item>
          <Form.Item >
            <Button size="large" type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>

        
      </div>
    )

  }

}

export default Form.create()(FormDemo)



````
