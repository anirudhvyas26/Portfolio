import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import { useState } from "react";
const Sidebar = () => {
  const [open,setOpen] = useState(false)
  const variants ={
open:
closed:
  
  }
  return (
    < motion.div className="sidebar">
<div className="bg">
    <Links/>
    </div> 
    <ToggleButton setopen={setOpen}/>
     </div>
  ) 
};

export default Sidebar
