"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { SpinnerMini } from "@/ui/Spinner";

const schema = yup.object({
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است!"),
  password: yup
    .string()
    // .min(8, "طول گذرواژه باید بیش از ۸ کاراکتر باشد")
    .required("گذرواژه الزامی است!"),
});

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
              ورود
            </Button>
          )}
        </div>
        <Link
          href="/signup"
          className={`${isLoading ? "hidden" : "btn btn--outline text-center"}`}
        >
          ثبت نام
        </Link>
      </form>
    </div>
  );
}
export default Signin;
