import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      stagerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef()
  const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div
      className="Services"
      variants={variants}
      initial="initial"
      //animate="animate"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
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
            <motion.b whileHover={{color:"orange"}}>Learning</motion.b>Everyday
          </h2>
        </div>
        <div className="title">
          <h2>
            <motion.b whileHover={{color:"orange"}}>New Ideas</motion.b>To Implement
          </h2>
          <button>What We DO</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Wtriting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            totam aliquid quos molestiae, maxime deserunt perferendis
            exercitationem nobis ut autem eligendi quis ipsum repellat
            voluptatum minus! Ipsum laborum quam placeat.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Wtriting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            totam aliquid quos molestiae, maxime deserunt perferendis
            exercitationem nobis ut autem eligendi quis ipsum repellat
            voluptatum minus! Ipsum laborum quam placeat.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Wtriting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            totam aliquid quos molestiae, maxime deserunt perferendis
            exercitationem nobis ut autem eligendi quis ipsum repellat
            voluptatum minus! Ipsum laborum quam placeat.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
