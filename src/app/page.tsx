import Image from "next/image";
import { Button } from "./components/button";
export default function Home() {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div
          id="login-wrapper"
          className=" w-[500px] items-center justify-center bg-[#fff] rounded-xl px-[55px] pb-[54px] pt-[65px] overflow-hidden"
        >
          <div id="login-content">
            <div className="flex justify-center">
              <Image
                src="/LogoBig.png"
                alt="www.Radisan.com"
                width={152}
                height={152}
                priority
              />
            </div>
            <div className=" space-y-1 text-center pb-2">
              <p className="pb-1 text-md font-semibold">سلامت نگر آینده ساز</p>
              <p className="pb-1 text-md font-semibold">
                آینده را انتخاب کن ، سلامت نگر باش
              </p>
              <h1 className="text-xl pb-12">
                سامانه اعلام و پیگیری هزینه های درمان
              </h1>
            </div>
            {/* <div className="flex justify-center">
              <h3 className="text-sm rounded-md bg-[#33485e] text-[#f5f6f7] px-5 py-4 mb-5">
                ورود ایرانیان با کد ملی
              </h3>
            </div> */}
            <form className="validate-form">
              <div className="text-right">
                <div
                  className="wrap-input100 validate-input border-b-2 border-[#d9d9d9]"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <label className="text-sm" htmlFor="username">
                    نام کاربری
                  </label>
                  <input
                    className="text-right input100 text-sm"
                    type="text"
                    name="username"
                    placeholder="کد ملی بیمه شده اصلی را وارد نمایید"
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>
                <div
                  className="wrap-input100 validate-input border-b-2 border-[#d9d9d9]"
                  data-validate="Password is required"
                >
                  <label htmlFor="username" className="text-sm">
                    رمز عبور
                  </label>

                  <input
                    className="text-right input100"
                    type="password"
                    name="pass"
                    placeholder="رمز عبور خود را وارد نمایید"
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
