import React, { useState } from "react";
import styles from "./styles.module.css";
import Router from "next/router";
import axios from "axios";
import Button from "../button/Button";
import { useEffect } from "react";

const Maping = ({ trip }) => {
  const onClickHandler = () => {
    console.log("HIT");
    Router.push(`/question/${trip.id}`);
  };

  const buttonAction = async () => {
    // console.log(localStorage.getItem("user_jwt"));

    await axios
      .delete(`http://localhost:3002/question/${trip.id}`, {
        headers: { user_jwt: localStorage.getItem("user_jwt") },
      })
      .then((data) => {
        console.log("hit");
        // Router.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.statusText);
        alert(err.response.statusText);
      });
  };
  // console.log("-------", trip.answerId);
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.answersNoBox}>
          <div>{trip.answerId.length}</div>

          <div>answers</div>
        </div>
        <div>{trip.userId[0].name}</div>
      </div>

      <div className={styles.textBox}>
        <h2 onClick={onClickHandler}>{trip.title}</h2>
        <p>{trip.questionText}</p>
      </div>
      <div className={styles.button}>
        <Button text={"DELETE"} onClick={buttonAction} />
      </div>
    </div>
  );
};

export default Maping;

// onClick={onClickHandler(trip.id)}
