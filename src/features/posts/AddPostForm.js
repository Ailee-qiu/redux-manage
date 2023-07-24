import { nanoid } from '@reduxjs/toolkit'
import { Button, Form, Input } from 'antd'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded({
        id: nanoid(),
        title,
        content
      }))
    }
    setTitle('')
    setContent('')
  }
  return (
    <section>
      <h2>添加新文章</h2>
      <Form>
        <Form.Item>
          <Input name='文章标题' type='text' id='title' value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Input.TextArea name='内容：' id='content' value={content} onChange={e => setContent(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button onClick={onSavePostClicked}>保存文章</Button>
        </Form.Item>
      </Form>
    </section>
  )
}
