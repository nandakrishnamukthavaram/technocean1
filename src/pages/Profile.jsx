import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { useAuth } from "../context/auth";
import { BACKEND_URL } from "../../backendUrl";
import UserListItem from "../components/users/UserListItem";
import { useNavigate } from "react-router-dom";
import { ring } from "ldrs";

const Profile = () => {
  const [user, setUser] = useAuth();
  const [reg, setReg] = useState("");
  const [email, setEmail] = useState(user?.email ? user.email : "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [pic, setPic] = useState("");
  const [search, setSearch] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);

  const navigate = useNavigate();

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const handleSearch = async (query) => {
    setError1(false);
    setError2(false);
    setError3(false);
    setError4(false);
    setError5(false);
    setSearch(query);
    setReg(query);
    if (!query) {
      return;
    }
    setLoading1(true);
    if (query.length >= 4) {
      try {
        const res = await fetch(`${BACKEND_URL}/ger`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user?.token}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            reg: query,
          }),
        });

        const data = await res.json();

        // console.log(data);
        setSearchResult(data);
        setLoading1(false);
      } catch (error) {
        console.log(error);
      }
    }
    setLoading1(false);
  };

  const debouncedHandleSearch = debounce(handleSearch, 1000);

  const handleChange = (event) => {
    debouncedHandleSearch(event.target, event.target.value);
  };

  const handleSelect = (u) => {
    setSearch("");

    const nameParts = u.name.split(" : ");
    const name = nameParts[0];
    setReg(u.registration_number);
    setName(name);
    setBranch(u.department);
    setPic(u.user_image);
  };

  const handleSubmit = async () => {
    if (!reg) {
      return setError1(true);
    }
    if (!name) {
      return setError2(true);
    }
    if (!email) {
      return setError3(true);
    }
    if (!phone) {
      return setError4(true);
    }
    if (phone.length < 10) {
      return setError4(true);
    }
    if (!branch) {
      return setError5(true);
    }
    setLoading2(true);

    try {
      const res = await fetch(`${BACKEND_URL}/user/create`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({
          // id_token: user.token,
          email,
          name,
          registration_number: reg,
          phone,
          branch,
          picture: pic,
        }),
      });

      const data = await res.json();

      if (res.status === 200) {
        const userD = {
          id: user.user.id,
          email,
          name,
          phone,
          reg,
        };

        setUser({
          user: userD,
          token: user.token,
        });
        localStorage.setItem(
          "auth",
          JSON.stringify({ user: userD, token: user.token })
        );
        setPhone("");
        setName("");
        setReg("");
        setEmail("");
        setBranch("");
        navigate("/dashboard");
      }

      // console.log(res.status);

      console.log(data);

      setLoading2(false);
    } catch (error) {
      console.log(error);
    }
    setLoading2(false);
  };

  useEffect(() => {
    ring.register();
    if (!user?.token) {
      navigate("/auth");
    }
  }, []);

  return (
    <div className="py-20 px-5 md:px-10 lg:px-20">
      <div className="flex justify-center">
        <div className="lg:w-[40%] md:w-[70%]">
          <Logo />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full md:w-[60%] lg:w-[35%]">
          <h1 className="text-center text-3xl my-7">
            Profile <span className="text-secondary">Builder</span>
          </h1>

          <div className="flex mb-5 relative">
            <input
              className="flex-1 bg-transparent border py-2 px-3 rounded placeholder:text-[#707070] font-m text-white focus:shadow-lg focus:outline-0"
              style={{
                borderColor: error1 ? "red" : "#3c3c3c",
              }}
              autoComplete="off"
              type="number"
              placeholder="Registration Number"
              autoFocus
              required
              value={reg}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {search?.length >= 4 && (
              <div className="w-[100%] top-11 flex justify-center absolute">
                <div className="w-[90%] px-2 py-3 bg-[#2E2E2E] flex flex-col space-y-2 rounded-xl overflow-y-scroll max-h-[40dvh]">
                  {loading1 ? (
                    <div className="flex justify-center items-center h-[40dvh]">
                      <l-ring
                        size="30"
                        stroke="2"
                        bg-opacity="0"
                        speed="2"
                        color="#FF7800"
                      ></l-ring>
                    </div>
                  ) : (
                    <>
                      {searchResult?.length === 0 ? (
                        <div className="h-[40dvh] flex justify-center items-center">
                          <p className="font-m text-sm">
                            <i>No results found!</i>
                          </p>
                        </div>
                      ) : (
                        <>
                          {searchResult?.map((user) => (
                            <UserListItem
                              key={user.registration_number}
                              user={user}
                              handleFunction={() => handleSelect(user)}
                            />
                          ))}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex mb-5">
            <input
              className="flex-1 bg-transparent border py-2 px-3 rounded placeholder:text-[#707070] font-m text-white focus:shadow-lg focus:outline-0"
              style={{
                borderColor: error2 ? "red" : "#3c3c3c",
              }}
              autoComplete="off"
              type="text"
              placeholder="Full Name"
              autoFocus
              required
              readOnly
              value={name}
            />
          </div>

          <div className="flex mb-5">
            <input
              className="flex-1 bg-transparent border py-2 px-3 rounded placeholder:text-[#707070] font-m text-white focus:shadow-lg focus:outline-0"
              style={{
                borderColor: error3 ? "red" : "#3c3c3c",
              }}
              autoComplete="off"
              type="email"
              placeholder="Email"
              autoFocus
              required
              value={email}
            />
          </div>

          <div className="flex mb-5">
            <input
              className="flex-1 bg-transparent border py-2 px-3 rounded placeholder:text-[#707070] font-m text-white focus:shadow-lg focus:outline-0"
              style={{
                borderColor: error4 ? "red" : "#3c3c3c",
              }}
              autoComplete="off"
              type="text"
              placeholder="Phone"
              autoFocus
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setError4(false);
              }}
            />
          </div>

          <div className="flex mb-5">
            <input
              className="flex-1 bg-transparent border py-2 px-3 rounded placeholder:text-[#707070] font-m text-white focus:shadow-lg focus:outline-0"
              style={{
                borderColor: error5 ? "red" : "#3c3c3c",
              }}
              autoComplete="off"
              type="text"
              placeholder="Batch"
              autoFocus
              required
              readOnly
              value={branch}
            />
          </div>

          <div className="flex justify-center mt-7">
            <button
              onClick={handleSubmit}
              className="text-center bg-secondary border border-secondary py-2 rounded font-m flex-1 font-semibold text-base shadow-lg active:scale-[.98]"
            >
              {loading2 ? (
                <l-ring
                  size="20"
                  stroke="2"
                  bg-opacity="0"
                  speed="2"
                  color="#FFFFFF"
                ></l-ring>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
