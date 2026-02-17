import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../../backendUrl";
import { useAuth } from "../context/auth";
import { timeStampToDate } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { ring } from "ldrs";

const SingleEvent = () => {
  const [user, setUser] = useAuth();
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const getEventById = async (id, user_id) => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/event/get`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_id: id,
          user_id,
        }),
      });

      const data = await res.json();
      console.log(data.event);
      setEvent(data.event);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user.token) {
      getEventById(id, user.user.id);
    } else {
      getEventById(id, "");
    }
  }, [id, user.token]);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
  };

  const calculateDuration = (start, end) => {
    const durationInMillis = end - start;
    const durationInHours = durationInMillis / (1000 * 60 * 60);
    const roundedDuration = Math.round(durationInHours);
    return roundedDuration;
  };

  const handleCreateOrder = async (amount, currency) => {
    setLoading1(true);
    const res = await fetch(`${BACKEND_URL}/user/payment/createOrder`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: user?.user?.email,
        event_id: id,
      }),
    });

    const data = await res.json();

    // console.log(data);

    const options = {
      key: data.api_key,
      amount: data.order.amount,
      currency: "INR",
      name: "TechnOcean",
      description: "Event Registration",
      image: "https://placekitten.com/100/100",
      order_id: data.order.id,
      handler: async function (response) {
        const verify_order = await fetch(
          `${BACKEND_URL}/user/payment/verifyOrder`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              ...response,
              event_id: id,
            }),
          }
        );

        const result = await verify_order.json();

        if (verify_order.status === 200) {
          setLoading1(false);
          navigate("/dashboard");
        }

        // console.log(result);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "LPU, Jalandhar",
      },
      theme: {
        color: "#FF7800",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
    setLoading1(false);
  };

  useEffect(() => {
    ring.register();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="my-32 px-3 md:px-10 lg:px-20 replative">
        {loading1 && (
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

        <h1 className="text-2xl text-center">
          <span className="text-secondary">EVE</span>NT
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-[70dvh]">
            <l-ring
              size="30"
              stroke="2"
              bg-opacity="0"
              speed="2"
              color="#FF7800"
            ></l-ring>
          </div>
        ) : (
          <div className="mt-7">
            <div className="flex justify-center">
              <div className="rounded-3xl overflow-hidden border-2 border-secondary shadow-2xl lg:w-[40%]">
                <img
                  src="https://images.unsplash.com/photo-1638029202288-451a89e0d55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFja2F0aG9ufGVufDB8fDB8fHww"
                  alt="Event"
                />
              </div>
            </div>

            <h1 className="text-3xl text-center mb-5 mt-7">
              {event ? `${event?.name}` : ""}
            </h1>

            {/* event details */}
            <div className="lg:flex lg:justify-center">
              <div className="rounded-2xl lg:rounded-md border border-[#3b3b3b] shadow-2xl flex items-center justify-evenly space-x-5 px-5 py-3 lg:w-[40%]">
                <div className="flex flex-col space-y-2">
                  <p className="font-m text-sm">
                    Venue:{" "}
                    <span className="text-secondary font-semibold">
                      {event?.venue}
                    </span>
                  </p>
                  <p className="font-m text-sm">
                    Date:{" "}
                    <span className="text-secondary font-semibold">
                      {event?.start_time
                        ? formatDate(timeStampToDate(event.start_time))
                        : ""}
                    </span>
                  </p>
                  <p className="font-m text-sm">
                    Duration:{" "}
                    <span className="text-secondary font-semibold">
                      {event
                        ? calculateDuration(
                            timeStampToDate(event.start_time),
                            timeStampToDate(event.end_time)
                          )
                        : ""}{" "}
                      Hrs
                    </span>
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="font-m text-sm">
                    Start Time:{" "}
                    <span className="text-secondary uppercase font-semibold">
                      {event?.start_time
                        ? formatTime(timeStampToDate(event.start_time))
                        : ""}
                    </span>
                  </p>
                  <p className="font-m text-sm">
                    End Time:{" "}
                    <span className="text-secondary uppercase font-semibold">
                      {event?.end_time
                        ? formatTime(timeStampToDate(event.end_time))
                        : ""}
                    </span>
                  </p>
                  <p className="font-m text-sm">
                    Faculty:{" "}
                    <span className="text-secondary font-semibold">
                      {event?.faculty[0]?.name
                        ? event?.faculty[0]?.name
                        : "Not Assigned"}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {!event?.user_registered && (
              <div className="flex justify-around lg:justify-center lg:space-x-16 items-center mt-10">
                <div>
                  <p className="font-s font-base">
                    Entry Fee -{" "}
                    <span className="text-secondary">
                      {event?.entry_fee?.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      })}
                    </span>
                  </p>
                </div>
                <div>
                  {user?.token ? (
                    <button
                      onClick={() => handleCreateOrder(event?.entry_fee, "INR")}
                      className="font-s font-base bg-secondary px-5 py-4 active:scale-[.98] rounded-xl"
                    >
                      Register Now
                    </button>
                  ) : (
                    <Link
                      to="/auth"
                      className="font-s font-base bg-secondary px-5 py-4 active:scale-[.98] rounded-xl"
                    >
                      Register Now
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* description */}
            <div className="mt-10">
              <p className="font-m text-sm lg:text-center lg:px-72">
                {event?.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SingleEvent;
