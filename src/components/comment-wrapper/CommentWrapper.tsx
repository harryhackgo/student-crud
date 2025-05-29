import React, { FC } from 'react'
import { useDeleteCommentMutation, useUpdateCommentMutation } from '../../redux/api/comment.api'

interface Props {
  data: any
}
const CommentWrapper:FC<Props> = ({data}) => {
  const [deleteComment] = useDeleteCommentMutation()
  const [updateComment] = useUpdateCommentMutation()

  // updateComment({id: 54, body: {text:"asdsad", star: 3}})
  
  return (
    <div>
      {
        data?.map((item:any)=> (
          <div key={item.id}>
            <h3>{item.text}</h3>
            <button onClick={()=> deleteComment(item.id)}>delete</button>
            <hr />  
          </div>
        ))
      }
    </div>
  )
}

export default React.memo(CommentWrapper)