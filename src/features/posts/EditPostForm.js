import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postUpdated, selectedPostById } from './postSlice';
export const EditPostForm = ({match}) => {
    const {postId} = match.params
    const post = useSelector(state => selectedPostById(state,postId))
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const dispatch = useDispatch()
    const history = useHistory()

    const onSavePostClicked = () =>{
        if(title&&content){
            dispatch(postUpdated({
                id:postId,
                title,
                content
            }))
            history.push(`/posts/${postId}`)
        }
    }
  return (
    <section>
        <h2>编辑文章</h2>
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
