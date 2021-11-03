import React from 'react';
import './Thirdleft.css';
// import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";

function Thirdleft() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      }; // your form submit function which will invoke after successful validation
    
      console.log(watch("example"));
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
          <label class="required">Name</label>
          <input placeholder="Vivek Oberoi"
            {...register("firstName", {
              required: true,
              maxLength: 25,
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors?.firstName?.type === "required" && <p1><br/></p1>}
          {errors?.firstName?.type === "maxLength" && (
            <p1>Name cannot exceed 25 characters</p1>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p1>Alphabetical characters only</p1>
          )}
          {/* <label>Last Name</label>
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          {errors?.lastName?.type === "pattern" && (
            <p1>Alphabetical characters only</p1>
          )} */}
          <label className='required'>Email ID</label>
          <input placeholder="abc@gmail.com"{...register("emailID", {required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })} />
          {errors?.emailID?.type === "required" && <p1><br/></p1>}
          {errors?.emailID?.type === "pattern" && (
            <p1>Alphabetical characters only</p1>
          )}
          
          <label class="required">Phone No</label>
          <input placeholder="+91 0000000000" {...register("mobNo", {required: true,minLength:10,maxLength:12 })} />
          {errors?.mobNo?.type === "required" && <p1><br/></p1>}
          {/* {errors?.mobNo?.type === "pattern" && (
            <p1>Mobile Number cannot be less than 10 characters</p1>
          )} */}

            <label class="required">Profession</label>
            <select {...register("profession",{required: true})}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            {errors?.profession?.type === "required" && <p1></p1>}
            <label class="required">Designation</label>
            <select {...register("designation",{required: true})}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
                defaultValue="..."
            </select>
            
            {errors?.designation?.type === "required" && <p1></p1>}
          <input type="submit" value="Register Now"/>
          <div className="last_text">
            <p>*By clicking this button, you submit your information to the webinar organizer, who will use it to communicate with youregarding this event and their other services.</p>
          </div>
        </form>
       
    );
};
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Thirdleft />, rootElement);
export default Thirdleft;
