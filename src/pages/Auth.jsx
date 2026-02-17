import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { BACKEND_URL } from "../../backendUrl";
// import { encrypt } from "../../utility";
import { useAuth } from "../context/auth";
import { ring } from "ldrs";
import validator from "validator";

const provider = new GoogleAuthProvider();

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useAuth();
  const [loading, setLoading] = useState(false);
  // const [loading1, setLoading1] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const navigate = useNavigate();

  const newAccount = async (token) => {
    const res = await fetch(`${BACKEND_URL}/user/checkNewAccount`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    return data;
  };

  // sign in with google
  const handleGoogleSignin = async () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const idToken = await user.getIdToken();

        const isNew = await newAccount(idToken);

        // console.log(user.uid);

        if (!isNew.message) {
          let userD = {
            id: isNew.user.user_id,
            reg: isNew.user.registration_number,
            email: user.email,
            name: isNew.user.name,
            phone: isNew.user.phone,
          };
          setUser({
            ...user,
            user: userD,
            token: idToken,
          });
          localStorage.setItem(
            "auth",
            JSON.stringify({ user: userD, token: idToken })
          );
          navigate("/dashboard");
          setLoading(false);
        } else {
          let userD = {
            id: user.uid,
            email: user.email,
          };
          setUser({
            ...user,
            user: userD,
            token: idToken,
          });
          navigate("/profile");
          setLoading(false);
        }
        // console.log(idToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // signup with email
  const signUp = async () => {
    if (!email) {
      return setError1(true);
    }

    if (!validator.isEmail(email)) {
      return setError1(true);
    }

    if (!password) {
      return setError2(true);
    }

    if (password.length < 6) {
      return setError2(true);
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;

        const idToken = await user.getIdToken();

        let userD = {
          id: user.uid,
          email: user.email,
        };
        setUser({
          ...user,
          user: userD,
          token: idToken,
        });
        navigate("/profile");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // // login with email
  const login = async () => {
    if (!email) {
      return setError1(true);
    }

    if (!validator.isEmail(email)) {
      return setError1(true);
    }

    if (!password) {
      return setError2(true);
    }

    if (password.length < 6) {
      return setError2(true);
    }

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        const idToken = await user.getIdToken();

        const isNew = await newAccount(idToken);
        let userD = {
          id: isNew.user.user_id,
          reg: isNew.user.registration_number,
          email: user.email,
          name: isNew.user.name,
          phone: isNew.user.phone,
        };
        setUser({
          ...user,
          user: userD,
          token: idToken,
        });
        localStorage.setItem(
          "auth",
          JSON.stringify({ user: userD, token: idToken })
        );
        navigate("/dashboard");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    ring.register();
  }, []);

  useEffect(() => {
    const login = localStorage.getItem("auth");
    if (login) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="py-20 lg:pt-10 px-5 md:px-10 lg:px-20 relative">
      {loading && (
        <div className="z-[100] fixed top-0 left-0 w-screen h-[100dvh] bg-black opacity-75 flex justify-center items-center">
          <l-ring
            size="30"
            stroke="2"
            bg-opacity="0"
            speed="2"
            color="#FF7800"
          ></l-ring>
        </div>
      )}

      <div className="flex justify-center">
        <div className="lg:w-[40%] md:w-[70%]">
          <Logo />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full md:w-[60%] lg:w-[35%]">
          <h1 className="text-center text-3xl my-7">
            {isLogin ? (
              <>
                Log<span className="text-secondary">in</span>
              </>
            ) : (
              <>
                Sign<span className="text-secondary">up</span>
              </>
            )}
          </h1>

          <div className="flex mb-5">
            <input
              className={`flex-1 bg-transparent border py-2 px-3 rounded placeholder:text-[#707070] font-m text-white focus:shadow-lg focus:outline-0 ${
                error1 ? "border-[#fb3a3a]" : "border-[#3c3c3c]"
              }`}
              type="email"
              placeholder="Email"
              autoFocus
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError1(false);
              }}
            />
          </div>
          <div className="flex">
            <input
              className={`flex-1 bg-transparent border py-2 px-3 rounded placeholder:text-[#707070] font-m text-white focus:shadow-lg focus:outline-0 ${
                error2 ? "border-[#fb3a3a]" : "border-[#3c3c3c]"
              }`}
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError2(false);
              }}
            />
          </div>

          {isLogin && (
            <Link className="flex justify-end font-m mt-4 text-[#797979] text-xs font-semibold">
              <i>Forgot password?</i>
            </Link>
          )}

          <div className="flex items-center mt-10 justify-center space-x-4">
            <button
              onClick={isLogin ? login : signUp}
              className="bg-secondary border border-secondary py-2 rounded font-m flex-1 font-semibold text-sm shadow-lg active:scale-[.98]"
            >
              Submit
            </button>
            {/* <p className="font-m font-bold text-[#7b7b7b] text-xs">or</p>
            <button className="border border-[#343434] px-1 py-2 rounded font-m flex-1 font-semibold text-sm shadow-lg active:scale-[.98]">
              Use Phone No.
            </button> */}
          </div>

          <p
            onClick={() => setIsLogin(!isLogin)}
            className="text-center cursor-pointer underline active:text-secondary font-m font-semibold text-xs my-10"
          >
            <i>
              {isLogin
                ? "Don't have an account? Create."
                : "Already have an account? Login."}
            </i>
          </p>

          <div className="bg-[#595959] h-[1px]"></div>

          <div className="flex justify-center">
            <div className="flex flex-col px-10 space-y-5 mt-10 w-[100%] lg:w-[90%]">
              <button
                onClick={handleGoogleSignin}
                className="flex space-x-2 justify-center items-center bg-[#264B8C] border border-[#264B8C] py-3 rounded-full shadow-lg active:scale-[.98]"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_1148)">
                    <path
                      d="M2.00903 7.39252C2.7356 5.87845 3.76216 4.59876 5.05591 3.5347C6.80903 2.08626 8.81997 1.21439 11.0747 0.947202C13.7231 0.63314 16.2122 1.1347 18.5137 2.51283C19.0856 2.85501 19.62 3.24408 20.1309 3.66595C20.2575 3.76908 20.2434 3.83001 20.1356 3.93314C19.0903 4.97376 18.045 6.01439 17.009 7.06439C16.8872 7.18626 16.8215 7.17689 16.6903 7.07845C13.6528 4.73939 9.2231 5.3722 6.95903 8.46595C6.5606 9.0097 6.23716 9.59564 6.01216 10.2331C5.99341 10.2894 5.95591 10.341 5.92778 10.3972C5.3231 9.93783 4.71372 9.47845 4.11372 9.01439C3.4106 8.47533 2.70747 7.93626 2.00903 7.39252Z"
                      fill="#E94335"
                    />
                    <path
                      d="M5.92478 14.793C6.12634 15.2383 6.29509 15.7023 6.54822 16.1195C7.61228 17.8633 9.13103 18.9836 11.1326 19.382C12.9373 19.743 14.6717 19.4992 16.2888 18.5945C16.3451 18.5664 16.4013 18.5383 16.4529 18.5102C16.481 18.5383 16.5045 18.5711 16.5326 18.5945C17.742 19.532 18.956 20.4695 20.1654 21.407C19.5842 21.9836 18.9232 22.4477 18.2201 22.8508C16.181 24.0133 13.9732 24.482 11.6482 24.3039C8.75134 24.0789 6.2529 22.9352 4.19041 20.8727C3.28572 19.968 2.54041 18.9461 2.00134 17.7789C2.50291 17.3945 3.00447 17.0148 3.50603 16.6305C4.31228 16.0164 5.11853 15.407 5.92478 14.793Z"
                      fill="#34A853"
                    />
                    <path
                      d="M20.1715 21.4099C18.9621 20.4724 17.748 19.5349 16.5386 18.5974C16.5105 18.5739 16.4824 18.5411 16.459 18.513C16.8761 18.1896 17.3027 17.8755 17.6449 17.463C18.2168 16.7786 18.5965 16.0052 18.7933 15.138C18.8168 15.0302 18.798 14.9927 18.6902 14.9974C18.634 15.0021 18.5824 14.9974 18.5261 14.9974C16.6136 14.9974 14.6965 14.9927 12.784 15.0021C12.573 15.0021 12.5261 14.9458 12.5308 14.7442C12.5402 13.3849 12.5402 12.0255 12.5308 10.6661C12.5308 10.4927 12.5777 10.4458 12.7511 10.4458C16.2574 10.4505 19.7636 10.4505 23.2746 10.4458C23.4246 10.4458 23.4855 10.4833 23.523 10.6427C23.809 11.9317 23.7902 13.2255 23.6168 14.5286C23.4761 15.5692 23.223 16.5771 22.834 17.5521C22.2574 18.9911 21.409 20.2474 20.2933 21.3255C20.2511 21.3583 20.209 21.3817 20.1715 21.4099Z"
                      fill="#4285F3"
                    />
                    <path
                      d="M5.92501 14.7978C5.11876 15.4118 4.31251 16.0212 3.50626 16.6353C3.0047 17.0149 2.50314 17.3993 2.00157 17.7837C1.61251 17.0618 1.35939 16.2978 1.15314 15.5103C0.759387 13.9868 0.69845 12.4399 0.914075 10.8884C1.08282 9.66963 1.43439 8.49775 2.00157 7.40088C2.7047 7.93994 3.40314 8.48369 4.10626 9.02275C4.71095 9.48682 5.31564 9.94619 5.92032 10.4056C5.8172 10.9071 5.67189 11.3993 5.62501 11.9149C5.54064 12.8524 5.6297 13.7665 5.89689 14.6665C5.91564 14.704 5.92032 14.7509 5.92501 14.7978Z"
                      fill="#FABB06"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1148">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.0184326 0.554199)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-m">
                  {isLogin ? "Sign in with Google" : "Sign up with Google"}
                </p>
              </button>
              <button
                // onClick={newAccount}
                className="flex space-x-2 py-3 justify-center items-center rounded-full border border-[#303030] shadow-lg active:scale-[.98]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0,0,256,256"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    //   style="mix-blend-mode: normal"
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                    </g>
                  </g>
                </svg>
                <p className="font-m">
                  {isLogin ? "Sign in with GitHub" : "Sign up with GitHub"}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
