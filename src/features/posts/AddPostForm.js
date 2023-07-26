import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId,setUserId] = useState('')
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title,content,userId))
    }
    setTitle('')
    setContent('')
  }
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const usersOptions = users
  return (
    <section>
      <h2>添加新文章</h2>
      <Form>
        <Form.Item>
          <Input name='文章标题' type='text' id='title' value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Select name='内容：' id='content' value={content} onChange={e => setContent(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Select options={usersOptions} name='Author:' id='postAuthor' value={userId} onChange={e => setUserId(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button disabled={!canSave} onClick={onSavePostClicked}>保存文章</Button>
        </Form.Item>
      </Form>
    </section>
  )
}
