import Post from "./Post"
import NewPost from "./NewPost"
import classes from "./PostsList.module.css"

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Niek" body="This is post one." />
        <Post author="Thérèse" body="This is post two." />
      </ul>
    </>
  )
}
export default PostsList
