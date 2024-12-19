

// import { Link, useNavigate, useLocation } from "react-router-dom";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { useContext } from "react";
// import AuthProvider, { Authcontext } from "../AuthProvider.jsx/AuthProvider";
// import Swal from "sweetalert2";

// const Register = () => {
//   const { userRegister, userGoogleLogin } = useContext(Authcontext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // To remember where the user tried to go before being redirected to login
//   const from = location.state?.from?.pathname || "/";  // Default to home if no state

//   const handelRegiste = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const photo = form.photo.value;
//     const password = form.password.value;
//     const userRegisterInfo = { name, email, photo, password };

//     userRegister(email, password)
//       .then(result => {
//         console.log(result.user);
//         let timerInterval;
//         Swal.fire({
//           title: "LogIn Successfully!",
//           html: "",
//           timer: 2000,
//           timerProgressBar: true,
//           didOpen: () => {
//             Swal.showLoading();
//             const timer = Swal.getPopup().querySelector("b");
//             timerInterval = setInterval(() => {
//               timer.textContent = `${Swal.getTimerLeft()}`;
//             }, 100);
//           },
//           willClose: () => {
//             clearInterval(timerInterval);
//           },
//         }).then((result) => {
//           if (result.dismiss === Swal.DismissReason.timer) {
//             console.log("I was closed by the timer");
//             navigate(from, { replace: true });  // Redirect to the page they were trying to access
//           }
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const handelGoogleLogin = () => {
//     console.log('button click');
//     userGoogleLogin()
//       .then(result => {
//         console.log(result.user);
//         // You can add a similar Swal after Google login and navigate if needed
//         navigate(from, { replace: true });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         <div className="hero min-h-screen mt-10 mb-10">
//           <div className="hero-content flex-col text-center w-full max-w-[800px]">
//             <div className="card bg-base-100 w-full shadow-2xl p-10">
//               <div className="text-center">
//                 <h1 className="text-5xl font-bold">Register now!</h1>
//               </div>
//               <form onSubmit={handelRegiste} className="card-body">
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Name</span>
//                   </label>
//                   <input
//                     name="name"
//                     type="text"
//                     placeholder="Enter your Name"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Email</span>
//                   </label>
//                   <input
//                     name="email"
//                     type="email"
//                     placeholder="Enter Your email"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Photo</span>
//                   </label>
//                   <input
//                     name="photo"
//                     type="url"
//                     placeholder="Photo URL"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Password</span>
//                   </label>
//                   <input
//                     name="password"
//                     type="password"
//                     placeholder="password"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>

//                 <div className="form-control mt-6 mb-3">
//                   <button className="btn btn-primary">Register</button>
//                 </div>
//                 <p>
//                   Already have an account? <Link className="text-blue-500 hover:underline" to="/login">Login</Link>
//                 </p>
//               </form>
//               <div className="divider m-3">OR</div>
//               <div className="btn m-3">
//                 <button onClick={handelGoogleLogin} className="w-full">Google LogIn</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Register;
import { Link, useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import AuthProvider, { Authcontext } from "../AuthProvider.jsx/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { userRegister, userGoogleLogin } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();

  // To remember where the user tried to go before being redirected to login
  const from = location.state?.from?.pathname || "/";  // Default to home if no state

  const handelRegiste = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const userRegisterInfo = { name, email, photo, password };

    userRegister(email, password)
      .then(result => {
        console.log(result.user);
        let timerInterval;
        Swal.fire({
          title: "LogIn Successfully!",
          html: "",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
            navigate(from, { replace: true });  // Redirect to the page they were trying to access
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handelGoogleLogin = () => {
    console.log('button click');
    userGoogleLogin()
      .then(result => {
        console.log(result.user);
        // After Google login, redirect to the page they tried to access
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="hero min-h-screen mt-10 mb-10">
          <div className="hero-content flex-col text-center w-full max-w-[800px]">
            <div className="card bg-base-100 w-full shadow-2xl p-10">
              <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
              </div>
              <form onSubmit={handelRegiste} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    name="photo"
                    type="url"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6 mb-3">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p>
                  Already have an account? <Link className="text-blue-500 hover:underline" to="/login">Login</Link>
                </p>
              </form>
              <div className="divider m-3">OR</div>
              <div className="btn m-3">
                <button onClick={handelGoogleLogin} className="w-full">Google LogIn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;


