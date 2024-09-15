import { Button } from "./button";
import InputField from "./input-field";
const Form = () => {
  return (
    <form className="validate-form">
      <div className="text-right">
        <InputField
          label="نام کاربری"
          type="text"
          name="username"
          placeholder="کد ملی بیمه شده اصلی را وارد نمایید"
        />
        <InputField
          label="رمز عبور"
          type="password"
          name="pass"
          placeholder="رمز عبور خود را وارد نمایید"
        />
      </div>

      <div className="container-login100-form-btn">
        <Button>ورود به سامانه</Button>
      </div>
      <div className="text-center mt-5 ">
        <span className="text-[#7277f7] text-sm">
          <a
            className="text-[#7277f7] hover:text-[#3138ff] hover:underline transition duration-150 ease-in-out "
            href="tel:+982178762000"
          >
            تماس با ما (پشتیبانی): ۰۲۱۷۸۷۶۲۰۰۰
          </a>
        </span>
      </div>
    </form>
  );
};

export default Form;
