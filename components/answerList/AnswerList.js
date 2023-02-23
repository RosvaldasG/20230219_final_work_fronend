import styles from "./answerList.module.css";
import Button from "../button/Button";
import axios from "axios";
import BackButton from "../backButton/BackButton";

const AnswerList = ({ answer }) => {
  const buttonAction = async () => {
    console.log(localStorage.getItem("user_jwt"));
    await axios
      .delete(`http://localhost:3002/answers/${answer.answerId}`, {
        headers: { user_jwt: localStorage.getItem("user_jwt") },
      })
      .then((response) => {
        // Router.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.statusText);
        alert(err.response.statusText);
      });
  };

  const actionLikes = async (data) => {
    console.log(data, answer.answerId);
    console.log(localStorage.getItem("user_jwt"));
    await axios
      .post(`http://localhost:3002/answersLikes/${answer.answerId}`, {
        headers: { user_jwt: localStorage.getItem("user_jwt") },
        likes: data,
      })
      .then((response) => {
        // Router.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.statusText);
        alert(err.response.statusText);
      });
  };

  return (
    <div className={styles.answerMain}>
      <div className={styles.likeWrapper}>
        <BackButton text={"LIKE"} onClick={() => actionLikes(1)} />

        <h1>{answer.likes}</h1>
        <BackButton text={"DISLIKE"} onClick={() => actionLikes(-1)} />
      </div>
      <div className={styles.textBox}>
        <div>{answer.answerText}</div>
      </div>

      <div className={styles.buttonWraper}>
        <Button onClick={buttonAction} text={"Delete"} />
      </div>
    </div>
  );
};

export default AnswerList;
