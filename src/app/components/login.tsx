import Logo from "./logo";
import Header from "./header";
import Form from "./form";

const Login = () => {
  return (
    <div
      id="login-wrapper"
      className=" w-[500px] items-center justify-center bg-[#fff] rounded-xl px-[55px] pb-[54px] pt-[65px] overflow-hidden"
    >
      <div id="login-content">
        <Logo />
        <Header />
        <Form />
      </div>
    </div>
  );
};
export default Login;
