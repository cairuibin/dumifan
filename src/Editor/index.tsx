
import React, { useState, useRef, forwardRef } from "react";
import BraftEditor from 'braft-editor'
import controls from './Editorconfig.js'
import './index.css'
function PriceInput({ value = '', options = {
  maxLenth: 1000
}, onChange = () => { }, placeholder = "请输入" }, ref) {

  const [counter, setcounter] = useState(0)
  const editorInstance:any = useRef();
  const total = (arg:any) :any=> {
    const textValueLen = arg.toText().length
    if (textValueLen <= options.maxLenth) {
      onChange(arg)
      setcounter(arg.toText().length)
    } else {
      const newva = BraftEditor.createEditorState(arg.toText().substr(0, options.maxLenth))
      editorInstance.current.setValue(newva)
    }

  }
  return (
    <div className="my-component" style={{
      display: 'flex', alignItems: 'flex-end'
    }} ref={ref}>
      <BraftEditor
        ref={editorInstance}
        value={BraftEditor.createEditorState(value)}
        onChange={total}
        placeholder={placeholder}
        style={{ border: "1px solid #c9d8db" }}
        controls={controls}
        imageResizable={false}
        imageControls={[]}
      />
      <div>
        {counter}/{options.maxLenth}
      </div>
    </div>
  )

};
PriceInput = forwardRef(PriceInput)
export default PriceInput
