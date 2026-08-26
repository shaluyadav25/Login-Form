import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const Form4 = () => {
  const schema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email"),
    password: yup
      .string()
      .required("password is required")
      .min(
        6,
        "atleast 6 character must include lowerCase,upperCase & special character",
      ),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("Form Data", data);
    reset();
  };
  return (
    <>
      <form
        className="flex flex-col max-w-md max-h-md bg-purple-200 shadow-5xl m-30 p-10 rounded-3xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-2xl text-center">Welcome Back</h1>
        <label htmlFor="email">Email</label>
        <input
        className="h-12 w-full border-2 border-gray-500 p-2 m-2 rounded-lg outline-none"
          type="email"
          name="email"
          placeholder="Enter your email"
          {...register("email")}
        />{" "}
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">Password</label>
        <input
                className="h-12 w-full border-2 border-gray-500 p-2 m-2 rounded-lg outline-none"

          type="password"
          name="password"
          placeholder="Enter password"
          {...register("password")}
        />{" "}
        {errors.password && <p>{errors.password.message}</p>}
        <button className="h-12 w-full rounded-2xl my-10 text-2xl text-white font-medium bg-purple-700">
          Login
        </button>
        <div className="flex justify-around">
            <div className="flex "> <button className="h-10 w-10"> <img src="/public/google.png" alt="img" /> Google </button> </div>
            <div> <button className="h-10 w-10"> <img src="/public/GitHub.webp" alt="git" /> Github</button> </div>
        </div>
      </form>
    </>
  );
};

export default Form4;
