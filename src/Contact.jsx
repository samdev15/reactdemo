import React, { useState } from 'react';

const Contact = () =>{

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const InputEvent = (event) =>{
        const {name, value} = event.target;

        setData((preV)=>{
            return {
                ...preV,
                [name]: value
            };
        });
    }

    const SubmitEvent = (e) =>{
        e.preventDefault();
        alert(`My name in ${data.name} and mobile number is: ${data.phone}. My email address is ${data.email}. I would like to say: ${data.message}`);
    }

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className=" col-6 mx-auto mt-5">
                        <h1 className="text-center mt-5">Welcome Contact Page</h1>
                        <form onSubmit={SubmitEvent}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Fullname</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={InputEvent} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <button className="btn btn-outline-primary btn-lg">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;