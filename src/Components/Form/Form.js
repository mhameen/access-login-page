import * as React from 'react';
import image1 from "../images/access-branding.jpg";
import image2 from "../images/side-image.jpg"
import image3 from "../images/access-logo.jpg"
import styles from "./Form.module.css";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { style } from '@mui/system';

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const submitform = () => {
    console.log("E-mail:", email);
    console.log("password:", password);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.context} >
      <div className={styles.leftContent}>
        <div>
          <img className={styles.sideImage1} src={image2} />
          <img className={styles.logoImage} src={image3} />
        </div>
      </div>
     <div className={styles.rightContent} >
       <div className={styles.container} >
           <img className={styles.brandImage} src={image1} />
           <h1 className={styles.signText}>Sign Up</h1>
       </div>
        <Card className={styles.CardDesign}>
            <div className={styles.design} >
                <button className={styles.but1} > 
              <i class="fab fa-github"></i> Sign up with GitHub </button>
              < hr />
              <TextField   style = {{width: 250,  marginBottom:20,}}
                className={styles.outlinedName}
                label="Enter your email"
                placeholder="Email"/>
                 <TextField   style = {{width: 250,  marginBottom:20,}}
                className={styles.outlinedName}
                placeholder="password"/>
                <button className={styles.but2} > sign up </button>
                <p className={styles.text} >Have an account? <span className={styles.text2} > login</span></p>
            </div>
        </Card> 
        <p className={styles.content}> making tech education accessible </p>
      </div>
    </div>
  );
};