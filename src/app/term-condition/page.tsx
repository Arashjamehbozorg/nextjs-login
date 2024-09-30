"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "../login/button";

export default function TermCondition() {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await axios.post(
        "/api/term-condition",
        { status: true }, // Sending 'status'
        {
          headers: {
            Authorization: `Token ${token}`, // Include the token in the headers
          },
        }
      );
      console.log("Response from backend:", response.data);

      if (response.status === 200) {
        router.push("/success-term");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Failed to submit acceptance of terms and conditions.");
    }
  };

  return (
    <div className="container-page px-[29px]">
      <div
        className="min-h-screen w-full md:w-2/5 mx-auto relative flex flex-col justify-center gap-4"
        dir="rtl"
      >
        <h1 className="text-2xl text-center">متن تعهدنامه</h1>
        <p className="mb-4 text-black text-center">
          بدینوسیله اینجانب متعهد و ملتزم می گردم، صحت کلیه اسناد ارایه و
          بارگزاری شده در سامانه درمان صندوق حمایت و بازنشستگی آینده ساز را
          تایید می نمایم و در صورتی که صندوق در هر زمان نیاز به دریافت اصل هر یک
          از مدارک و مستندات بارگزاری شده را داشته باشد، فورا نسبت به ارایه آن
          اقدام نمایم. همچنین در صورتی که به هر علت از ارایه اسناد و مدارک
          خودداری و یا در موعد مقررتعیین شده تحویل ننمایم، صندوق می تواند ضمن
          محاسبه و اخذ کلیه خسارات وارده و نیز هزینه هایی که از بابت عدم صحت
          مدارک ارایه شده به اینجانب پرداخت گردیده است، از حقوق و یا سایر مزایا
          و مطالبات اینجانب کسر نماید.
        </p>
        <div className="mb-4">
          <label className="flex items-center gap-2 text-sm text-right">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            موارد فوق را مطالعه نمودم و مورد تایید اینجانب است.
          </label>
        </div>
        {isChecked && (
          <div>
            <Button onClick={handleSubmit}>تایید</Button>
          </div>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}
