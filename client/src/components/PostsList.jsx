import Post from "./Post"
import classes from "./PostsList.module.css"

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Niek" body="This is post one." />
      <Post author="Thérèse" body="This is post two." />
    </ul>
  )
}
export default PostsList
