import React, { useState, useEffect } from "react";

function Blogs() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});

  //Get Method
  fetch("/blogs")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });

      console.log(data[0])

  return (
      <div>
        {/* <button onClick={apiGet}>click</button> */}
        {data.map((item) => (
            <div><h1 key={item._id}>
              {item.title}
            </h1>
            <p>{item.content}</p>
            <span>{item.topic}</span></div>
          ))}
      </div>
  );
}

export default Blogs;