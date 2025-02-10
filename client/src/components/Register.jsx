// import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { Context } from "../main";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Register = () => {
//   const { isAuthenticated } = useContext(Context);
//   const navigateTo = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [selectedValue, setSelectedValue] = useState("email");

//   const handleRegister = async (data) => {
//     data.phone = `+91${data.phone}`;
//     await axios
//       .post("http://localhost:4000/api/v1/user/register", data, {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((res) => {
//         toast.success(res.data.message);
//         navigateTo(`/otp-verification/${data.email}/${data.phone}`);
//       })
//       .catch((error) => {
//         console.log("error regd",error.response.data.message);
        
//         toast.error(error.response.data.message);
//       });
//   };
//   const handleRadioChange = (e) => {
//     setSelectedValue(e.target.value);
//   };
//   return (
//     <>
//       <div>
//         <form
//           className="auth-form"
//           onSubmit={handleSubmit((data) => handleRegister(data))}
//         >
//           <h2>Register</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             required
//             {...register("name")}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             {...register("email")}
//           />
//           <div>
//             <span>+91</span>
//             <input
//               type="number"
//               placeholder="Phone"
//               required
//               {...register("phone")}
//             />
//           </div>
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             {...register("password")}
//           />
//           <div className="verification-method">
//             <p>Select Verification Method</p>
//             <div className="wrapper">
//               <label className={`radio-type ${selectedValue === 'email' ? 'selected' : ''}`}>
//                 <input
//                   type="radio"
//                   name="verificationMethod"
//                   value={"email"}
//                   {...register("verificationMethod")}
//                   checked={selectedValue === "email"}
//                   onChange={handleRadioChange}
//                   required
//                 />
//                 Email
//               </label>
//               <label className={`radio-type ${selectedValue === 'phone' ? 'selected' : ''}`} >
//                 <input
//                   type="radio"
//                   name="verificationMethod"
//                   value={"phone"}
//                   {...register("verificationMethod")}
//                   checked={selectedValue === "phone"}
//                   onChange={handleRadioChange}
//                   required
//                 />
//                 Phone
//               </label>
//             </div>
//           </div>
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Register;
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const { isAuthenticated, API } = useContext(Context);
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedValue, setSelectedValue] = useState("email");

  const handleRegister = async (data) => {
    data.phone = `+91${data.phone}`;
    await axios
      .post(`${API}/api/v1/user/register`, data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.success(res.data.message);
        navigateTo(`/otp-verification/${data.email}/${data.phone}`);
      })
      .catch((error) => {
        console.log("error regd", error.response.data.message);
        toast.error(error.response.data.message);
      });
  };

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div>
        <form
          className="auth-form"
          onSubmit={handleSubmit((data) => handleRegister(data))}
        >
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Name"
            required
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Email"
            required
            {...register("email")}
          />
          <div>
            <span>+91</span>
            <input
              type="number"
              placeholder="Phone"
              required
              {...register("phone")}
            />
          </div>
          <input
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          />
          <div className="verification-method">
            <p>Select Verification Method</p>
            <div className="wrapper">
              <label className={`radio-type ${selectedValue === 'email' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="verificationMethod"
                  value="email"
                  {...register("verificationMethod")}
                  checked={selectedValue === "email"}
                  onChange={handleRadioChange}
                  required
                />
                Email
              </label>
              <label className={`radio-type ${selectedValue === 'phone' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="verificationMethod"
                  value="phone"
                  {...register("verificationMethod")}
                  checked={selectedValue === "phone"}
                  onChange={handleRadioChange}
                  required
                />
                Phone
              </label>
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
