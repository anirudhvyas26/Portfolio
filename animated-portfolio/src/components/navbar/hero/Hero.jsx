import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2> ANIRUDH VYAS</h2>
          <h1>web developer</h1>
          <div className="buttons">
            <button>See the Latest Projects</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="slidingTextCounter">
       <span> Writer Musician Developer</span>
      </div>
      <div className="imageContainer">
        <img src="/Dexter1 (1).png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
