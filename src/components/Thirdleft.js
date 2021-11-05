import React,{useState} from 'react';
import './Thirdleft.css';
// import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
// import Axios from 'axios';
import { db } from '../firebase-config';
import {collection, addDoc, setDoc} from "firebase/firestore";
import Swal from 'sweetalert2'
function Thirdleft() {
    const url = "https://api.zoom.us/v2/accounts/office@cambridgewealth.in/webinars/98069244111/registrants"
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    // const [data, setData] = useState({
    //   firstName: "",
    //   emailID: "",
    //   mobNo: "",
    //   profession: "",
    //   designation: ""
    // })
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(data);
        // data.preventDefault();
        // let axiosConfig = {
        //   headers: {
        //       'Content-Type': 'application/json;charset=UTF-8',
        //       'Access-Control-Allow-Origin': '*'
        //   }
        // };
        // Axios.post(url,{
        //   "first_Name": data.firstName,
        //   "email": data.emailID,
        //   "phone": data.mobNo,
        //   "org": data.profession,
        //   "job_title": data.designation
        // },axiosConfig)
        // .then(res=>{
          
        //   console.log(res.data)
        // })
    }; // your form submit function which will invoke after successful validation
    
    const saveAnswer = (event) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You have been registered!',
        text: "You will get the confirmation mail soon!",
        showConfirmButton: false,
        timer: 2000
      })
      event.preventDefault();
      const elementsArray = [...event.target.elements]
      const formData = elementsArray.reduce((accumulator, currentValue) => {
        if (currentValue.id) {
          accumulator[currentValue.id] = currentValue.value;
        }
        return accumulator;
      }, {});
      // db.collection("users").add(formData);
      addDoc(collection(db,"users"),formData);
    };
      console.log(watch("example"));
    return (
            <form onSubmit={saveAnswer}>
          <label class="required">Name</label>
          <input id="name" placeholder="Vikas Oberoi"
            {...register("firstName", {
              required: true,
              maxLength: 25,
              pattern: /^[A-Za-z]{3}/i
            })}
          />
          {errors?.firstName?.type === "required" && <p1><br/></p1>}
          {errors?.firstName?.type === "maxLength" && (
            <p1>Name cannot exceed 25 characters</p1>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p1>Invalid name</p1>
          )}
          {/* <label>Last Name</label>
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          {errors?.lastName?.type === "pattern" && (
            <p1>Alphabetical characters only</p1>
          )} */}
          <label className='required'>Email ID</label>
          <input id="email" placeholder='abc@gmail.com' {...register("emailID", {required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })} />
          {errors?.emailID?.type === "required" && <p1><br/></p1>}
          {errors?.emailID?.type === "pattern" && (
            <p1>Invalid email id</p1>
          )}
          
          <label class="required">Phone No</label>
          <input id="phone" placeholder="+91 0000000000" defaultValue="+91 " {...register("mobNo", {required: true,minLength:10,maxLength:12 })} />
          {errors?.mobNo?.type === "required" && <p1><br/></p1>}
          {errors?.mobNo?.type === "number" && (
            <p1>Invalid Mobile Number</p1>
          )}
          <div class="row">
            <div class="col-sm-5">
              <label>Profession</label>
              <select id="profession" {...register("profession",{required: false})}>
                  <option value="Service">Service</option>
                  <option value="Private">Private</option>
                  <option value="Govt Sector">Govt Sector</option>
                  <option value="Self Employed">Self Employed</option>
                  <option value="Retired">Retired</option>
                  <option value="Student">Student</option>

              </select>
              {errors?.profession?.type === "required" && <p1></p1>}
            </div>
            <div className="col-sm-5">
              <label>Designation</label>
              <select id="designation" {...register("designation",{required: false})}>
                  <option value="Salaried - Director">Salaried - Director</option>
                  <option value="Salaried - VP, SVP">Salaried - VP, SVP</option>
                  <option value="Salaried - CEO">Salaried - CEO</option>
                  <option value="Salaried - Associate">Salaried - Associate</option>
                  <option value="Salaried - Manager">Salaried - Manager</option>
                  <option value="Owner - Trading Business">Owner - Trading Business</option>
                  <option value="Owner - Manufacturing Enterprises">Owner - Manufacturing Enterprises</option>
                  <option value="Owner - Director">Owner - Director</option>
                  <option value="Self Employed - Concultant">Self Employed - Concultant</option>
                  <option value="Self Employed - Freelancer">Self Employed - Freelancer</option>
            
              </select>
              
              {errors?.designation?.type === "required" && <p1></p1>}
            </div>
          </div>
          <input type="submit" value="Register Now" />
          <div className="last_text">
            <p>*By clicking this button, you submit your information to the webinar organizer, who will use it to communicate with youregarding this event and their other services.</p>
          </div>
        </form>
       
    );
};
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Thirdleft />, rootElement);
export default Thirdleft;
