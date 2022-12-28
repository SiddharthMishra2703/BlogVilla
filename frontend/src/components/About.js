import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch('/Dashboard', {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      // console.log(data);
      setUserData(data);


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  }
  // console.log(userData.blogs && userData.blogs[0].content);
  // userData.blogs && userData.blogs.forEach((blog) => 
  //    { <div className="row my-4">
  //             <div className="col-md-6 fs-5">
  //               {blog.title}
  //             </div>
  //             <div className="col-md-6 fs-5">
  //               {blog.topic}
  //             </div>
  //       </div>
  // });

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="container">
      <form method="GET">
        <div className="card shadow text-center">
          <div className="card-header">
            User Information
          </div>
          <div className="card-body">
            <h1 className="card-title">Welcome {userData.name} !</h1>
            <p className="card-text fs-5">{userData.work}</p>
            <hr />
            <div className="row my-4">
              <div className="col-6 fs-5 fw-bolder">Your ID</div>
              <div className="col-6 fs-5 text-danger">{userData._id}</div>
            </div>
            <div className="row my-4">
              <div className="col-6 fs-5 fw-bolder">Name</div>
              <div className="col-6 fs-5 text-danger">{userData.name}</div>
            </div>
            <div className="row my-4">
              <div className="col-6 fs-5 fw-bolder">Email Address</div>
              <div className="col-6 fs-5 text-danger">{userData.email}</div>
            </div>
            <div className="row my-4">
              <div className="col-6 fs-5 fw-bolder">Phone</div>
              <div className="col-6 fs-5 text-danger">{userData.phone}</div>
            </div>
            <div className="row my-4">
              <div className="col-6 fs-5 fw-bolder">Work</div>
              <div className="col-6 fs-5 text-danger">{userData.work}</div>
            </div>
            <hr />
            <h2 className="card-title">Your Blogs</h2>
            {/* <div className="row my-4">
              <div className="col-md-6 fs-5">
                {userData.title}
              </div>
              <div className="col-md-6 fs-5">
                {userData.topic}
              </div>

            </div> */}
            {userData.blogs && userData.blogs.map((blog) => (
              <div className="row my-4">
              <div className="col-md-6 fs-5">
                {blog.title}
              </div>
              <div className="col-md-6 fs-5">
                {blog.topic}
              </div>
            </div>
            ))}
          </div>
          <div className="card-footer text-muted">
            I Hope You Have A Good Time
          </div>
        </div>
      </form>

    </div>
  )
}
