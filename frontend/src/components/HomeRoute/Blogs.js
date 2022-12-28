import React from 'react'
import { Link } from "react-router-dom";
import {useEffect, useState}  from 'react'


export default function Blogs() {

    const [userData, setUserData] = useState([]);
    const getData = async () => {
        try {
            const res = await fetch('/blog', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json(); 
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (

        <div>
        {userData.map((item) => (
        <div className="card w-50 shadow mx-auto my-5" >
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.topic}</h6>
                <p className="card-text">{item.content}</p>
                <Link to={"/blogs/" + item._id} className="btn-sm btn-primary">Read More</Link>
            </div>
        </div>
        ))}
      </div>
    )
}