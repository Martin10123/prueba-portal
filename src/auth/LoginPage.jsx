import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import buque from "../images/buque.jpeg";

import styles from "./login.module.css";
import { AuthUserContext } from "../context/AuthUser";
import { useContext } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsLogged } = useContext(AuthUserContext);
  const { user, password, onInputChange } = useForm({
    user: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault;

    if (user === "" || password === "") {
      return alert("Todos los campos son obligatorios");
    }

    if (user === "admin" && password === "admin") {
      localStorage.setItem("user", JSON.stringify({ user, password }));
      navigate("/gedin/permisos/home", {
        replace: true,
      });
      setIsLogged(true);
    }
  };

  return (
    <section className={styles.login_container}>
      <div className={styles.login_content}>
        <div className={styles.login_img}>
          <img src={buque} alt="Imagen sobre un puerto" />
        </div>

        <div className={styles.login_contain_form}>
          <h1>Ingresar</h1>

          <form className={styles.login_formulario}>
            <div className={styles.login_contain_input}>
              <label className={styles.login_label_form}>Usuario</label>
              <input
                className={styles.login_input_form}
                name="user"
                value={user}
                onChange={onInputChange}
                type="text"
                placeholder="Carlos..."
              />
            </div>
            <div className={styles.login_contain_input}>
              <label className={styles.login_label_form}>Contraseña</label>
              <input
                className={styles.login_input_form}
                name="password"
                value={password}
                onChange={onInputChange}
                type="password"
                placeholder="*********"
              />
            </div>

            <button className={styles.login_btn} onClick={onSubmitForm}>
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
