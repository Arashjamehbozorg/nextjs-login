"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

import axios, { AxiosError } from "axios";
import { Button } from "./button";
import InputField from "./input-field";
interface ErrorResponse {
  message: string;
}

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("/api/login", { username, password });
      const token = response.data.token;
      setToken(token);

      localStorage.setItem("token", token); // store token in local storage
      router.push("/profile");
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>;
      setError(axiosError.response?.data?.message || "Failed to login");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="mb-8">
        <InputField
          labelName="کد ملی بیمه شده اصلی"
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="کد ملی بیمه شده اصلی را وارد نمایید"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <InputField
          labelName="رمز عبور"
          type="password"
          id="password"
          name="pass"
          value={password}
          placeholder="رمز عبور خود را وارد نمایید"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="container-login-form-btn">
        <Button>ورود</Button>
      </div>
      <div className="text-center mt-14">
        <span className="text-[#002361v] font-light text-sm">
          <a
            className="text-[#002361] hover:text-[#3138ff] hover:underline transition duration-150 ease-in-out "
            href="tel:+982178762000"
          >
            تماس با ما (پشتیبانی): ۰۲۱۷۸۷۶۲۰۰۰
          </a>
        </span>
      </div>
      {token && <p>Token: {token}</p>}
    </form>
  );
};

export default Form;
