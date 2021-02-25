import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import styles from "./Form.module.css";

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const { addToast } = useToasts();

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios
      .post("/api/contact", {
        name,
        email,
        message,
      })
      .catch((error) => console.error(error));

    if (!response) {
      addToast("Algo deu errado", { appearance: "error", autoDismiss: true });
    } else {
      setName("");
      setEmail("");
      setMessage("");
      addToast("Mensagem enviada!", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <div className={styles.inputDiv}>
          <label>Nome: </label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputDiv}>
          <label>E-mail: </label>
          <input
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputDiv}>
          <label>Mensagem: </label>
          <textarea
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            className={styles.input}
          ></textarea>
        </div>
      </div>
      <button
        onSubmit={handleSubmit}
        className={styles.submitButton}
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
