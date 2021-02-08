import classes from './MyPosts.module.css';
const MyPosts = () => {
  return <div>
    My posts
    <div>new posts</div>
    <div className ={classes.item}>post 1</div>
    <div className ={classes.item}>post 2</div>
  </div>

}

export default MyPosts;