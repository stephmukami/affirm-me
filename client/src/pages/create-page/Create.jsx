import React from 'react'

function Create() {
    const [post,setPost] = useState('')
    const handleSubmit = () =>{
        
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="affirmation">Enter affirmation</label>
            <input type="text" 
            value = {post}
            onChange = {(e)=>setPost(e.target.value)}

            />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Create
