import React, { useCallback } from "react";

const Contact = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // form submission logic here
  }, []);

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center">Contact Us</h2>
      <form className="w-75 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
