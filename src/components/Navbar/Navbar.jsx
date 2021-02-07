import classes from './Navbar.module.css';
const Navbar = () => {
  return <nav className={classes.nav}>
    <div className={classes.item}><a src="#">Profile</a></div>
    <div className={classes.item}><a src="#">Messages</a></div>
    <div className={classes.item}><a src="#">News</a></div>
    <div className={classes.item}><a src="#">Music</a></div>
    <div className={classes.item}><a src="#">Settings</a></div>
  </nav>
}

export default Navbar;