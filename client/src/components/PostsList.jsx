import { useState } from "react"

import Post from "./Post"
import NewPost from "./NewPost"
import Modal from "./Modal"
import classes from "./PostsList.module.css"

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("")
  const [enteredAuthor, setEnteredAuthor] = useState("")
  const [modalIsVisible, setModalIsVisible] = useState(true)

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value)
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value)
  }

  function hideModalHandler(event) {
    setModalIsVisible(false)
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onAuthorChange={authorChangeHandler}
            onBodyChange={bodyChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Thérèse" body="This is post two." />
      </ul>
    </>
  )
}
export default PostsList
