import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setEmail,
  setMessage,
  clearForm,
  selectForm,
} from "../redux/formSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const form = useSelector(selectForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    dispatch(clearForm());
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={form.email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={form.message}
            onChange={(e) => dispatch(setMessage(e.target.value))}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
