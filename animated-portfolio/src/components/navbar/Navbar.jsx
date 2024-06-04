import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/*sidebar*/}
      <div className="wrapper">
        <span>Anirudh </span>
        <div className="social">
          <a href="#"> <img src="/instagram.png" alt="" /></a>
          <a href="#"> <img src="youtube.png" alt=""/></a>
          <a href="#"> <img src="dribbble.png" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
