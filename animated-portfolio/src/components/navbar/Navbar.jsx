import "./navbar.scss";
import {motion} from "framer-motion"
import Sidebar from "./sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/*sidebar*/}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}}animate={{opacity:1, scale:1 }} transition={{duration:0.5}}>Anirudh </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/anirudh-vyas-8722b0200?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqoiTE5Z%2FRJ%2BTb4WRsXFyDg%3D%3D"> <img src="/circle-linkedin-512.webp" alt="" /></a>
          <a href="https://github.com/anirudhvyas26"> <img src="/github-6980894_1280.webp" alt=""/></a>{/*git hub */}
         {/* <a href="#"> <img src="/dribbble.png" alt="" /></a>*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
