import { useState } from "react";
import { Button, Form, FormGroup, InputGroup, Row } from "react-bootstrap";

export function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    if (
      fullName.length >= 3 &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      emailBody.length >= 3 &&
      subject.length >= 3
    ) {
      const body = {
        fullName: fullName,
        email: email,
        subject: subject,
        body: emailBody,
      };
      console.log(body);
    } else {
      console.log("not correctly inputed");
    }
  }

  function onNameChange(e) {
    setFullName(e.target.value);
  }
  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onEmailBodyChange(e) {
    setEmailBody(e.target.value);
  }

  function onSubjectChange(e) {
    setSubject(e.target.value);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <FormGroup>
          <label htmlFor="full-name">Full name</label>
          <input
            name="full-name"
            value={fullName}
            placeholder="Your full name"
            onChange={onNameChange}
          ></input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={email}
            placeholder="Your email that you want to be contacted on"
            onChange={onEmailChange}
          ></input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="subject">subject</label>
          <input
            name="subject"
            value={subject}
            placeholder="What is the subject of your email?"
            onChange={onSubjectChange}
          ></input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="email-body">Message</label>
          <input
            name="email-body"
            value={emailBody}
            placeholder="What you wish to tell us"
            onChange={onEmailBodyChange}
          ></input>
        </FormGroup>
        <button>Submit</button>
      </form>
    </div>
  );
}
