import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import Input from "@/components/input/Input";
import { useState } from "react";
import Button from "@/components/button/Button";
import axios from "axios";
import Router from "next/router";
import styles from "../styles/Home.module.css";
import BackButton from "@/components/backButton/BackButton";
import TextInput from "@/components/textInput/TextInput";

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
        Router.push("/");
      })
      .catch((err) => {
        alert("Error");
      });
  };

  return (
    <div>
      <Navbar text={"Gal kas atsakys ..."} />

      <div className={styles.inputWraper}>
        <Input
          type="text"
          value={title}
          placeholder="Question title"
          onChange={setTitle}
        />

        <TextInput
          type="text"
          value={questionText}
          placeholder="Question description"
          onChange={setQuestionText}
        />

        <div className={styles.buttonWrapper}>
          <Button onClick={onClickHandler} text="Create" />
        </div>
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

export default insertTrip;
