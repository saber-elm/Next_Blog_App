"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { SpinnerMini } from "@/ui/Spinner";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "حداقل کاراکتر ۵ عدد است")
      .max(30, "حداکثر کاراکتر ۳۰ عدد است")
      .required("نام و نام خانوادگی الزامی است!"),
    email: yup
      .string()
      .email("ایمیل نامعتبر است")
      .required("ایمیل الزامی است!"),
    password: yup
      .string()
      // .min(8, "طول گذرواژه باید بیش از ۸ کاراکتر باشد")
      .required("گذرواژه الزامی است!"),
  })
  .required();
// export const metadata = {
//   title: "ثبت نام",
// };

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signup } = useAuth();

  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="گذرواژه"
          name="password"
          register={register}
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
        />
        <div className="flex justify-center">
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button type="submit" variant="primary" className="w-full">
              ثبت نام
            </Button>
          )}
        </div>
        <Link
          href="/signin"
          className={`${isLoading ? "hidden" : "btn btn--outline text-center"}`}
        >
          ورود
        </Link>
      </form>
    </div>
  );
}
export default Signup;
