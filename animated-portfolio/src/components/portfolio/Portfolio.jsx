import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/4550421/pexels-photo-4550421.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus est, nam consequatur deserunt odio, provident saepe minima officia magnam consectetur reiciendis ut quis tempora eius sint illum eos! Ipsum, repellendus?",
  },
  {
    id: 2,
    title: "Netflix",
    img: "https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus est, nam consequatur deserunt odio, provident saepe minima officia magnam consectetur reiciendis ut quis tempora eius sint illum eos! Ipsum, repellendus?",
  },
  {
    id: 3,
    title: "Url Shortner",
    img: "https://images.pexels.com/photos/221283/pexels-photo-221283.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus est, nam consequatur deserunt odio, provident saepe minima officia magnam consectetur reiciendis ut quis tempora eius sint illum eos! Ipsum, repellendus?",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section ref={ref}>
      <div className="container">
        <img src={item.img} alt="" />
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Portfolio;
