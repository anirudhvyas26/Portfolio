import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/167733/pexels-photo-167733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus est, nam consequatur deserunt odio, provident saepe minima officia magnam consectetur reiciendis ut quis tempora eius sint illum eos! Ipsum, repellendus?",
  },
  {
    id: 2,
    title: "Netflix",
    img: "https://images.pexels.com/photos/409479/pexels-photo-409479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
   // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer"ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
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
