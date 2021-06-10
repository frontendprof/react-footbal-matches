
import React,{useState} from 'react'
import {CircularProgress} from "@material-ui/core";
import {Redirect} from 'react-router-dom';

import {useFormik} from "formik";
import * as Yup from "yup";

import {firebase} from "../firebase"
import { showToastError,showToastSuccess } from "../utils/tools"




const Signin = (props) => {

    const [loading,setLoading]=useState(false)

    const formik=useFormik({
        initialValues:{
            email:"abdumalik@billz.co",
            password:"Testing123"
        },
        validationSchema:Yup.object({
            email:Yup.string().email("Invalid email address").required("The email is required"),
            password:Yup.string().required("The password is required"),
        }),
        onSubmit:(values)=>{
            setLoading(true)
            submitForm(values)
        }
    })

    const submitForm=(values)=>{
        firebase.auth()
        .signInWithEmailAndPassword(
            values.email,
            values.password
        ).then(()=>{
            showToastSuccess("Welcome back!!!")
            props.history.push("/dashboard")
        }).catch((error)=>{
            setLoading(false)
            showToastError(error.message)
        })
    }



    return (
        <div>
            {!props.user?
                 <div className="container">
                    <div className="signin_wrapper" style={{ margin:"100px" }}>
                        <form onSubmit={formik.handleSubmit}>
                            <h2>Please login</h2>
        
                            <input name="email" // change type to name later on
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email?
                                <div className="error_label">
                                    {formik.errors.email}
                                </div>
                            :null}
        
                            <input name="password"
                                type="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password?
                                <div className="error_label">
                                    {formik.errors.password}
                                </div>
                            :null}
        
                            {loading ?
                                <CircularProgress color="secondary" className="progress"/>
                            :
                            <button type="submit">Log in</button>
                            }
                            
                        </form>
                    </div>
                    
                 
             </div>
            :
            <Redirect to="/dashboard"/>    
        }

        </div>
       
        
        
    )
}

export default Signin
