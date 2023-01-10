import React, { useState } from "react";
import "./Book.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
const Book = () => {
  const [data, setdata] = useState({});
  const nav = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const storedata = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(data));
    toast.success(`Welcome ${data.name}🙌`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    setTimeout(()=>{
      nav('/')
    },5000)
  };

  return (
    <div className="backimg">
    <div className="container1">
      <div className="heading">
        <h1 className="h1">Book A Demo Now</h1>
      </div>
      <div className="register">
        <form action="" onSubmit={storedata}>
          <label htmlFor="Name" className="labels">
            Name <span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder="Ex. John Doe"
            required={true}
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="Name" className="labels">
            Email <span className="star">*</span>
          </label>
          <input
            type="email"
            required={true}
            placeholder="Ex. mail@website.com"
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="Name" className="labels">
            Password <span className="star">*</span>
          </label>
          <input
            type="password"
            required={true}
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
          />
          <label htmlFor="Name" className="labels">
            Company Name <span className="star">*</span>
          </label>
          <input
            type="text"
            required={true}
            placeholder="Ex. XYZ PVT LTD"
            name="company"
            onChange={handleChange}
          />
          <label htmlFor="Name" className="labels">
            Your Title <span className="star">*</span>
          </label>
          <input
            type="title"
            required={true}
            placeholder="Ex. Operational Head"
            name="title"
            onChange={handleChange}
          />
          <input
            type="submit"
            value={"Book Demo"}
            className="button"
            name=""
            id=""
          />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    </div>
  );
};

export default Book;
