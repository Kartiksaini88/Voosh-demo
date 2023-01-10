import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Dashboard.css";
import { ToastContainer, toast } from "react-toastify";
const logos = [
  {
    img: "https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp",
  },
  {
    img: "https://voosh.in/static/media/page1_2.4bfc2d124bbd2e50da2d.webp",
  },
  {
    img: "https://voosh.in/static/media/page1_3.1d108925b5e5156bb2d4.webp",
  },
  {
    img: "https://voosh.in/static/media/page1_4.a2a22e7f5e42a50552ae.webp",
  },
  {
    img: "https://voosh.in/static/media/page1_5.f505a37d3e86d1a571da.webp",
  },
  {
    img: "https://voosh.in/static/media/page1_6.2213ad7f35bd24758114.webp",
  },
];

const Dashboard = () => {
  let data;
  useEffect(() => {
    data = JSON.parse(localStorage.getItem("data"));
    if (data !== null) {
      loggedIn();
    } else {
      notloggedIn();
    }
  }, []);

  const loggedIn = () => {
    toast(`Hello!! ${data.name}🤗`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notloggedIn = () => {
    toast.error(`You are not logged in`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="nav">
        <img
          src="https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp"
          className="logo"
          alt="logo"
        />
      </div>
      <div className="content-and-img">
        <div className="content-div">
          <h1 className="content">
            Consolidate your restaurants' insights in one place. Unlock growth.
          </h1>
          <div className="text">
            <p className="para">
              Your one stop solution to view mission-critical data and insights
              from all your locations in one place.
            </p>
          </div>
          <div className="btn-div">
            <button
              className="btn-book"
              onClick={() => {
                navigate("/waitinglist");
              }}
            >
              Book Demo
            </button>
            <div className="arrow-img-div">
              <img
                className="arrow-img"
                src="https://voosh.in/static/media/arrow.ff14f58c77374c33f8e8.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="img-div">
          <img
            className="right-side-img"
            src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp"
            alt=""
          />
        </div>
      </div>
      <div>
        {logos.map((e, i) => (
          <img className={`logos-${i}`} src={e.img}></img>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Dashboard;
