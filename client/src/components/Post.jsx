const names = ["Niek", "Therese"]

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1]

  return (
    <>
      <p>{chosenName}</p>
      <p>This is the post.</p>
    </>
  )
}

export default Post
