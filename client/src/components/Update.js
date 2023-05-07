import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Update = () => {

    const [inpval,setINP] = useState({
        name:"",
        dob:"",
        email:""
    });
    
    const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }

    return (
        <div className="container">
            <NavLink to={"/"}>Home</NavLink>
            <form className="mt-5">
                <div class="mb-3 col-lg-6">
                    <label for="exampleInput1" class="form-label">Name</label>
                    <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInput1" />
                </div>
                <div class="mb-3 col-lg-6">
                    <label for="exampleInput2" class="form-label">Date Of Birth</label>
                    <input type="date" value={inpval.dob} onChange={setdata} name="dob" class="form-control" id="exampleInput2" />
                </div>
                <div class="mb-3 col-lg-6">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Update