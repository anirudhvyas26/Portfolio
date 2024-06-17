import "./services.scss";
import { motion } from "framer-motion";
 const variants={
  initial:{ x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      stagerChildren:0.1,
      
    }
  }
 }
const Services = () => {
  return (
    <motion.div className="Services" variants={variants} initial="initial" animate="animate">
      <motion.div className="textContainer" variants={variants}>
        <p>
          “No loss should be more regrettable to us than losing our time, <br />{" "}
          for its irretrievable.”
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h2>
            <b>Learning</b>Everyday
          </h2>
        </div>
        <div className="title">
          <h2>
            <b>New Ideas</b>To Implement
          </h2>
          <button>What We DO</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Wtriting</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, totam aliquid quos molestiae, maxime deserunt perferendis exercitationem nobis ut autem eligendi quis ipsum repellat voluptatum minus! Ipsum laborum quam placeat.</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box"whileHover={{background:"lightgray", color:"black"}}>
            <h2>Wtriting</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, totam aliquid quos molestiae, maxime deserunt perferendis exercitationem nobis ut autem eligendi quis ipsum repellat voluptatum minus! Ipsum laborum quam placeat.</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Wtriting</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, totam aliquid quos molestiae, maxime deserunt perferendis exercitationem nobis ut autem eligendi quis ipsum repellat voluptatum minus! Ipsum laborum quam placeat.</p>
            <button>Go</button>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Services;
