import MyPosts from './myPosts/MyPosts';
import classes from './Profiles.module.css';
const Profiles = () => {
  return <div className={classes.cont}>
  <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
  <div>ava + dedsc</div>
  <MyPosts />
</div>
}

export default Profiles;