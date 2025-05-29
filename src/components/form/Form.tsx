import { FormEvent, useState } from "react"
import { useCreateCommentMutation } from "../../redux/api/comment.api"

const Form = () => {
  // centerId = 151
  const [text,setText] = useState("")
  const [star, setStar] = useState("")
  const [createComment, {isLoading, isSuccess, isError, error}] = useCreateCommentMutation()

  // useEffect(()=>{
  //   if(isSuccess){
  //       setStar("")
  //       setText("")
  //   }
  // }, [isSuccess])
  
  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    let newComment = {
      text,
      star: Number(star),
      centerId: 151
    }
    createComment(newComment)
      .unwrap()
      .then((res) => {
        setStar("")
        setText("")
      })
      .catch((err)=>{
        alert(err?.data?.message);
      })
  } 
  return (
    <div>
        <h2>Form</h2>
        <form onSubmit={handleSubmit} action="">
          <input value={text} onChange={e => setText(e.target.value)} type="text" />
          <input value={star} onChange={e => setStar(e.target.value)} type="number" />
          <button disabled={isLoading}>create</button>
        </form>
    </div>
  )
}

export default Form