import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
       <h1>Let's Work Together </h1>
      <div className="item">
        <h2>Mail</h2>
        <span>anirudhvyas26@gmail.com</span>
      </div>
      <div className="item">
        <h2>Address</h2>
        <span>Koregaon Park, Pune</span>
      </div>
      <div className="item">
        <h2>Phone</h2>
        <span>9829584974</span>
      </div>
      <div className="formContainer">
<form >
    <input type="text" required placeholder="Name" />
    <input type="email" required placeholder="Email" />
    <textarea rows={8} placeholder = "Message" />
    <button>Submit</button>
    </form >
      </div>
       </div>
    </div>
  )
}

export default Contact
