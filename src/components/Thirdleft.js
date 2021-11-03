import React from 'react';
import './Thirdleft.css';
// import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

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
          <label>Name</label>
          <input
            {...register("firstName", {
              required: true,
              maxLength: 25,
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors?.firstName?.type === "required" && <p1>This field is required</p1>}
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
          <label>Email ID</label>
          <input {...register("emailID", {required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })} />
          {errors?.emailID?.type === "required" && <p1>This field is required</p1>}
          {errors?.emailID?.type === "pattern" && (
            <p1>Alphabetical characters only</p1>
          )}
          
          <label>Phone No</label>
          <input {...register("mobNo", {required: true,minLength:10,maxLength:12, pattern: /^[]+$/i })} />
          {errors?.mobNo?.type === "required" && <p1>This field is required</p1>}
          {errors?.mobNo?.type === "pattern" && (
            <p1>Mobile Number cannot be less than 10 characters</p1>
          )}

            <label>Profession</label>
            <select {...register("profession",{required: true})}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            {errors?.profession?.type === "required" && <p1>This field is required</p1>}
            <label>Designation</label>
            <select {...register("designation",{required: true})}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            {errors?.designation?.type === "required" && <p1>This field is required</p1>}
          <input type="submit" />
        </form>
    );
};
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Thirdleft />, rootElement);
export default Thirdleft;
