import Logo from "../components/logo";
import Header from "./header";
import Form from "./form";

import FooterLogin from "./footer-login";
const Login = () => {
  return (
    <div className="container-page px-[29px]">
      <div
        id="login-wrapper"
        className="w-full md:w-[500px] items-center justify-center bg-silver-100 rounded-2xl  pt-[134px] overflow-hidden "
      >
        <div id="login-content">
          <Logo />
          <Header />
          {/* <OptionsBox /> */}
          <Form />
        </div>
      </div>
      <FooterLogin />
    </div>
  );
};
export default Login;
