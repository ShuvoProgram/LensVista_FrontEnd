"use client";
import React, { useRef, useState, RefObject } from 'react';
import Button3b from '../ui/button3d'
import { useLoginUserMutation, useRegisterUserMutation } from '@/redux/feature/user/userApi';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';
import { ToastAction } from '../ui/toast';
import Loader from '../loader';
import { useAppDispatch } from '@/redux/hooks';
import { getUser, setToken } from '@/redux/feature/user/userSlice';

const SignForm6 = () => {

    const [registerUser, { isLoading }] =
    useRegisterUserMutation();
  const router = useRouter();
  const { toast } = useToast();

  const dispatch = useAppDispatch();
  const [loginUser, { isLoading: isLoadingLogin }] = useLoginUserMutation();

  const redirectTo = "/";

  const [isForm, setIsForm] = useState({
    login : true,
    register : false,
    forgotPW : false,
  })
  const signInEmailRef = useRef<HTMLInputElement>(null);
const signInPasswordRef = useRef<HTMLInputElement>(null);
const signUpNameRef = useRef<HTMLInputElement>(null);
const signUpEmailRef = useRef<HTMLInputElement>(null);
const signUpPasswordRef = useRef<HTMLInputElement>(null);
const signUpConfirmPasswordRef = useRef<HTMLInputElement>(null);
const emailForgotPWRef = useRef<HTMLInputElement>(null);
 
  const handleSubmitSignIn = async (event:any) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const data = {
      email,
      password,
    };
    const response: any = await loginUser(data);
    const { data: responseData, error } = response;

    if (responseData?.statusCode === 200) {
      toast({
        title: responseData?.message,
      });
      dispatch(setToken(responseData?.data?.token));
      await dispatch(getUser());
      router.push(redirectTo);
    } else {
      toast({
        variant: "destructive",
        duration: 2500,
        title: error?.data?.message,
        action: (
          <ToastAction
            altText="Try again"
            onClick={() => form.reset()}
          >
            Try again
          </ToastAction>
        ),
      });
    }
  }
  const handleSubmitSignUp = async (event:any) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const data = {
      name,
      email,
      password,
    };
console.log(data);
    const result: any = await registerUser(data);
    const { data: responseData, error } = result;
    if (responseData?.statusCode === 200) {
      toast({
        title: responseData?.message,
      });
      router.push("/auth/registration");
    }
    if (error?.status === 400) {
      toast({
        variant: "destructive",
        duration: 2500,
        title: error?.data?.message,
        action: (
          <ToastAction
            altText="Try again"
            onClick={() => form.reset()}
          >
            Try again
          </ToastAction>
        ),
      });
    }
  }
  const handleResetPassword = (e:any) => {
    e.preventDefault()
    /* 
    Do something here !
    */
  }
  const getPosition = () => {
    return isForm.login ? "top-full"
    : isForm.register ? "top-0"
    : isForm.forgotPW ? "-top-full"
    : null
  }

  return (
    <div className="relative w-full py-20 px-5 flex flex-col items-center bg-gray-800 font-body"> {/* Container */}

      {/* :TITLE */}
      <div className="mb-16 text-center z-5">
        <h1 className="text-3xl font-extrabold text-black text-opacity-60 sm:text-4xl lg:text-5xl">Fancy Login 6</h1>
      </div>

      {/* :BACKGROUND */}
      <img src="https://fancytailwind.com/static/5dfce83b05690d28dad875e650414878/39d9b/work1.webp" alt="" className="absolute top-0 w-full h-full bg-center object-cover opacity-50"/>

      {/* :MAIN CONTAINER */}
      <div className="relative z-10 max-w-5xl w-full md:w-3/4 grid grid-cols-7 overflow-hidden rounded-lg shadow-xl">

        {/* ::Image */}
        <div className="hidden md:block md:col-span-2 relative border-t border-transparent">
          <img src="https://fancytailwind.com/static/20750afe9a72da72f5e833a13145b401/ad9f4/work2.webp" alt="" className="absolute h-full bg-center object-cover"/>
        </div>

        {/* ::Options */}
        <div className="z-10 col-span-7 sm:col-span-2 md:col-span-1 h-full flex sm:flex-col border-t border-transparent items-center text-sm text-gray-500">
          {/* Login */}
          <button onClick={() => setIsForm({ login : true, register : false, forgotPW : false })} className={`py-1.5 w-full h-full sm:h-1/3 inline-flex flex-col justify-center items-center active:outline-none focus:outline-none ${isForm.login ? "bg-white bg-opacity-90 text-gray-800" : "text-white"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="">Login</span>
          </button>
          {/* Registration */}
          <button onClick={() => setIsForm({ login : false, register : true, forgotPW : false })} className={`py-1.5 w-full h-full sm:h-1/3 inline-flex flex-col justify-center items-center active:outline-none focus:outline-none ${isForm.register ? "bg-white bg-opacity-90 text-gray-800" : "text-white"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="">Register</span>
          </button>
        </div>

        {/* ::Displayed forms Container */}
        <div className={`col-span-7 sm:col-span-5 md:col-span-4 relative max-h-550px transition-all duration-500 ease-in-out transform -translate-y-full ${getPosition()}`}>

          {/* ::Login Form */}
          <div onSubmit={handleSubmitSignIn} className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-90 transition-all duration-150 ease-in transform ${!isForm.login && "opacity-0"}`}>
            {/* :::Login Title */}
            <h2 className="py-4 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-t from-gray-200 to-green-600 font-bold">Login Here</h2>
            {/* :::Login Form */}
            <form action="" className="py-10 w-full">
              {/* Login Email */}
              <label htmlFor="email" className="relative">
                <input ref={signInEmailRef} id="email" type="email" name="email" className="form-input mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:ring-0 focus:border-green-600" placeholder="Email" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </label>
              {/* Login Password */}
              <label htmlFor="password" className="relative">
                <input ref={signInPasswordRef} id="password" type="password" name="password" className="form-input mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:ring-0 focus:border-green-600" placeholder="Password" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </label>
              {/* Login Submit Button */}
              <div className="mt-10 w-full">
                <Button3b type="submit" bgColor="bg-green-600 bg-opacity-70">
                {isLoadingLogin ? (
                  <Loader
                    size="32"
                    color="white"
                  />
                ) : (
                  <>Log In </>
                )}
                </Button3b>
              </div>
            </form>
          </div>

          {/* ::Register Form */}
          <div onSubmit={handleSubmitSignUp} className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-90 transition-all duration-150 ease-in transform ${!isForm.register && "opacity-0"}`}>
            {/* :::Register Title */}
            <h2 className="py-4 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-t from-gray-200 to-blue-600 font-bold">Register Here</h2>
            {/* :::Register Form */}
            <form action="" className="py-10 w-full">
              {/* Register Username */}
              <label htmlFor="name" className="relative">
                <input ref={signUpNameRef} id="name" type="text" name="name" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-blue-600 focus:ring-0" placeholder="Name" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </label>
              {/* Register Email */}
              <label htmlFor="email" className="relative">
                <input ref={signUpEmailRef} id="email" type="email" name="email" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-blue-600 focus:ring-0" placeholder="Email" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </label>
              {/* Register Password */}
              <label htmlFor="password" className="relative">
                <input ref={signUpPasswordRef} id="password" type="password" name="password" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-blue-600 focus:ring-0" placeholder="Password" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </label>
              {/* Login Submit Button */}
              <div className="mt-10 w-full">
                <Button3b type="submit" bgColor="bg-blue-600 bg-opacity-70">
                {isLoading ? (
                  <Loader
                    size="32"
                    color="white"
                  />
                ) : (
                  <>Create account </>
                )}
                </Button3b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignForm6;
