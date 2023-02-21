import Link from "next/link";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";

const login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onClickHandler = () => {
    const signupData = {
      email: email,
      password: password,
    };
    console.log(signupData);

    axios
      .post("http://localhost:3002/login", signupData)
      .then((res) => {
        // console.log(res.data.jwt_token);
        console.log(res.data);
        localStorage.setItem("user_jwt", res.data.jwt_token);
        document.cookie = `jwt_token= ${res.data.jwt_token}`;
        alert(res.data.status);
        Router.push("/");
      })
      .catch((err) => {
        // console.log(err.response.data.response);
        alert("Klaida");
      });
  };
  return (
    <>
      <h1>LOGIN</h1>
      <div className={styles.inputWraper}>
        <Input
          type="email"
          onChange={setEmail}
          value={email}
          placeholder="e-mail"
        />
        <Input
          type="password"
          onChange={setPassword}
          value={password}
          placeholder="password"
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Login" />
      </div>

      <div>
        <Link href="/">Back</Link>
      </div>
    </>
  );
};

export default login;
