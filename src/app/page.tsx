import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>

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
            <div className="flex justify-center">
              <h3 className="text-sm rounded-md bg-[#33485e] text-[#f5f6f7] px-5 py-4 mb-5">
                ورود ایرانیان با کد ملی
              </h3>
            </div>
            <form className="validate-form">
              <div className="text-right">
                <div
                  className="wrap-input100 validate-input border-b-2 border-[#d9d9d9]"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <label className="text-sm" htmlFor="username">
                    کد ملی
                  </label>
                  <input
                    className="text-right input100 text-sm"
                    type="text"
                    name="username"
                    placeholder="کد ملی خود را وارد نمایید"
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
                <div className="text-right pt-2 pb-8">
                  <a className="text-sm" href="#">
                    رمز عبور خود را فراموش کرده اید؟
                  </a>
                </div>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">ورود به سامانه</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
