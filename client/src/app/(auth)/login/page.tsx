"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Checkbox } from "@mui/material";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CSSTextField, ButtonCustom } from "@/components/ui";
import { FaGoogle, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";

import loginSchema from "@/validations/loginSchema";
import GradientCircularProgress from "@/components/loader/Loader";
import { useLoginUserMutation } from "@/services/auth/authApi";

const Page = () => {
  const [login, { isLoading, error }] = useLoginUserMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data: unknown) => {
    await login(data);
  };

  useEffect(() => {
    if (error && "data" in error) {
      const { message } = error.data as any;
      toast.error(message);
    }
  }, [error]);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-body  text-text-primary">
        <div className="md:w-[900px]  w-[368px]  flex rounded-[16px] overflow-hidden drop-shadow-3xl">
          <div className="w-[40%] bg-white ">
            <div className="box p-[40px] pb-[20px]">
              <div className="flex items-center  gap-3 mb-[30px]">
                <h3 className="text-[30px] leading-[40.5px] font-[400]">
                  Crema
                </h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <CSSTextField
                    name="email"
                    control={control}
                    errors={errors.email}
                    label="UserName"
                    className="w-full text-[10px] "
                  />
                </div>
                <div className="mb-4">
                  <CSSTextField
                    name="password"
                    control={control}
                    errors={errors.password}
                    type="password"
                    label="Password"
                    className="w-full text-[10px]"
                  />
                </div>

                <div className="flex items-center gap-3 ">
                  <Checkbox />
                  <p className="font-be-vietnampro text-14 font-[400] text-[#6B7280] leading-22">
                    Remember me
                  </p>
                </div>

                <div className=" flex items-center justify-end mb-4">
                  <div className="text-primary font-[500] text-14 leading-24 cursor-pointer">
                    Forget Your Password?
                  </div>
                </div>

                <ButtonCustom
                  backgroundColor="#08afdc"
                  variant="contained"
                  className=""
                  type="submit"
                >
                  Login
                </ButtonCustom>
              </form>
              <p className="mt-[20px] font-be-vietnampro text-14 font-400 text-[#6B7280]">
                Don&apos;t have account?{" "}
                <Link
                  href="/register"
                  className="font-Poppins text-primary font-400"
                >
                  {" "}
                  Signup
                </Link>
              </p>
            </div>
            <div className="bg-sidebar-menu-selected-bg-color w-full h-[50px] flex items-center justify-between px-[40px]">
              <p className="text-14 font-BeVietNam text-[#6B7280] font-400 leading-22">
                Or Login With
              </p>
              <div className="flex items-center gap-3 text-[#6B7280] text-[14px]">
                <button>
                  <FaGoogle />
                </button>
                <button>
                  <FaFacebookF />
                </button>
                <button>
                  <FaGithub />
                </button>
                <button>
                  <FaTwitter />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[60%] bg-text-primary flex items-center justify-center">
            <div className=" w-[60%]">
              <h1 className="text-white text-[30px] font-[600] mb-3 ">
                Wecome to Crema!
              </h1>
              <p className="text-white text-[14px] font-BeVietNam text-left font-400 leading-22">
                Crema is purely based on Material ui components and follows
                Material ui guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 bg-black/30 w-screen h-screen z-[999] flex items-center justify-center">
          <GradientCircularProgress />
        </div>
      )}
    </>
  );
};

export default Page;
