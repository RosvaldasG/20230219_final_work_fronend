import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import Input from "@/components/input/Input";
import { useState } from "react";
import Button from "@/components/button/Button";
import axios from "axios";
import Router from "next/router";
import styles from "../styles/Home.module.css";

const insertTrip = () => {
  const [title, setTitle] = useState();
  const [questionText, setQuestionText] = useState();

  const onClickHandler = async () => {
    const questionData = {
      title: title,
      questionText: questionText,
    };

    console.log(questionData);
    console.log(localStorage.getItem("user_jwt"));

    await axios
      .post("http://localhost:3002/question", questionData, {
        headers: { user_jwt: localStorage.getItem("user_jwt") },
      })
      .then((res) => {
        // console.log(res.data.jwt_token);
        console.log(res.data);
        // localStorage.setItem("user_jwt", res.data.jwt_token);
        // document.cookie = `jwt_token= ${res.data.jwt_token}`;
        // alert(res.data.response);
        Router.push("/");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  return (
    <div>
      <Navbar />
      <Link href="/">Back</Link>

      <div className={styles.inputWraper}>
        <Input
          type="text"
          value={title}
          placeholder="Question title"
          onChange={setTitle}
        />

        <Input
          type="text"
          value={questionText}
          placeholder="Question description"
          onChange={setQuestionText}
        />

        <div className={styles.buttonWraperInput}>
          <Button onClick={onClickHandler} text="Create" />
        </div>
      </div>
    </div>
  );
};

export default insertTrip;
