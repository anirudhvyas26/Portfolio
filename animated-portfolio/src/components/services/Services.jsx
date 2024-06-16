import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="Services">
      <motion.div className="textContainer">
        <p>
          “No loss should be more regrettable to us than losing our time, <br />{" "}
          for it's irretrievable.”
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
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

      <motion.div className="listContainer">
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
