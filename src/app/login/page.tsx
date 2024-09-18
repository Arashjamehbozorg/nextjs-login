// @ts-nocheck

import Logo from "../components/logo";
import Header from "./header";
import Form from "./form";
import OptionsBox from "./options-box";
import BackgroundText from "./background-text";
import FooterLogin from "./footer-login";
const Login = () => {
  return (
    <div className="container-page">
      <div
        id="login-wrapper"
        className=" w-[500px] items-center justify-center bg-silver-100 rounded-2xl px-[55px] pb-[54px] pt-[134px] overflow-hidden"
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
