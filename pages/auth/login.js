import LoginForm from "@/components/Form/LoginForm";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const Login = () => {
  const { user, loadingAuth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loadingAuth) {
      if (user) {
        router.push("/");
      }
    }
  }, [user, loadingAuth]);

  if (loadingAuth) {
    return <h1>loading</h1>;
  }

  if (user) {
    return <h1>redirecting</h1>;
  }

  return (
    <div className="bg-slate-50 dark:bg-customDark-200 grid place-items-center min-h-screen">
      <LoginForm />
    </div>
  );
};

export default Login;
