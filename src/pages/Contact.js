import { useState } from 'react';
import Input from '../components/Input';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleName = (value) => {
    setName(value);
  };
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handlePhone = (value) => {
    setPhone(value);
  };
  const handleMessage = (value) => {
    setMessage(value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 10000);
  };
  return (
    <>
      <header className="Contact-header">
        <div className="site-heading">
          <h1>Contact Me</h1>
          <span>Have questions? I have answers.</span>
        </div>
      </header>
      <div className="container">
        <div className="contact">
          <p>
            Want to get in touch? Fill out the form below to send me a message
            and I will get back to you as soon as possible!
          </p>

          <form onSubmit={submitForm}>
            <Input
              label="Name"
              name="name"
              type="text"
              onChange={handleName}
              value={name}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              onChange={handleEmail}
              value={email}
            />
            <Input
              label="Phone"
              name="phone"
              type="tel"
              onChange={handlePhone}
              value={phone}
            />
            <Input
              label="Message"
              name="message"
              type="textarea"
              value={message}
              onChange={handleMessage}
            />
            <button>SEND</button>
          </form>

          {submit && (
            <div className="submit">
              <h1>Thank you for your message. I will be in touch soon.</h1>
              <div className="review">
                <h3>Review Your Message</h3>
                <div className="contact-info">
                  <p>{name}</p>
                  <p>{phone}</p>
                  <p>{email}</p>
                </div>
                <p>{message}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Contact;
