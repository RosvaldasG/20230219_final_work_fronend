import Link from "next/link";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import Navbar from "@/components/navbar/Navbar";
import BackButton from "@/components/backButton/BackButton";

const register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onClickHandler = () => {
    const signupData = {
      name: name,
      email: email,
      password: password,
    };
    console.log(signupData);

    axios
      .post("http://localhost:3002/register", signupData)
      .then((res) => {
        // console.log(res.data.jwt_token);
        // console.log(res.data);
        localStorage.setItem("name", res.data.result.name);
        localStorage.setItem("user_jwt", res.data.jwt_token);
        document.cookie = `jwt_token= ${res.data.jwt_token}`;
        alert(res.data.response);

        Router.push("/");
      })
      .catch((err) => {
        alert("Klaida");
      });
  };
  return (
    <div>
      <Navbar text={"Gal kas atsakys ..."} />

      <div className={styles.inputWraper}>
        <Input type="text" onChange={setName} value={name} placeholder="Name" />
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
        <Button onClick={onClickHandler} text="Register" />
      </div>

      <div>
        <BackButton
          text={"BACK"}
          onClick={() => {
            Router.push("/");
          }}
        />
      </div>
    </div>
  );
};

export default register;
