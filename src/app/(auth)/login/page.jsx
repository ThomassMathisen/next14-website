import LoginForm from "@/components/loginForm/loginForm";
import styles from "./login.module.css";
import { handleGithubLogin } from "@/lib/action";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
