import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./email.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Email({ emailRef }) {
  const [inputValue, setInputValue] = useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qofm58j",
        "template_yjmwx2t",
        e.target,
        "user_ud4OUDpzoE4udB1RoOGpc"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setInputValue("");
    alert("I have received you message. Thanks 😎 ");
  };

  return (
    <div
      className="container border email__container"
      ref={emailRef}
      style={{
        marginTop: "50px",
        width: "50%",

        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Message Box</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          className="form-control"
          value={inputValue}
        />

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="form-control"
          value={inputValue}
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          className="form-control"
          value={inputValue}
        />
        <input
          type="submit"
          value="send"
          className="form-control btn btn-primary"
          style={{ marginTop: "10px" }}
        />
      </form>
      <footer>
        <div className="footer">
          <a href="https://github.com/EhsanAlimo" target="_blank">
            <GitHubIcon style={{ width: "40px" }} />
          </a>
          <a href="https://www.linkedin.com/in/ehsan-alimo/" target="_blank">
            <LinkedInIcon style={{ width: "40px" }} />
          </a>
          <p>© 2021 Ehsan Alimo</p>
        </div>
      </footer>
    </div>
  );
}

export default Email;
