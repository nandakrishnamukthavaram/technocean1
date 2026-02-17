import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Logo from "../components/Logo";
import { cse, lpu } from "../assets";
import {
  advisory_commitee,
  chief_patron,
  joint_secretary,
  patron,
  program_chair,
  program_co_chair,
  program_secretary,
} from "../../aboutData";

const About = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <Layout>
      <div className="my-32 px-3 md:px-10 lg:px-20">
        <div className="flex justify-center lg:mt-40">
          <div className="lg:w-[40%]">
            <Logo />
          </div>
        </div>

        {/* technocean */}
        <div className="bg-[#2E2D2D] rounded-xl p-5 lg:py-10 lg:px-20 shadow-2xl mt-5 lg:mt-10 border border-[#605D5D]">
          <p className="font-m text-xs lg:text-base lg:text-center font-light">
            TechnOcean is a three-day tech fest hosted by the School of Computer
            Science at{" "}
            <span className="text-secondary font-semibold">
              Lovely Professional University
            </span>
            , with a theme of{" "}
            <span className="text-secondary font-semibold">
              "Learn. Build. Present."
            </span>{" "}
            This unique event brings together students, professionals, and
            industry experts to explore the latest trends and innovations in
            technology. Through a series of hackathons, workshops, and sessions,
            participants will have the opportunity to learn new skills, build{" "}
            <span className="text-secondary font-semibold">innovative</span>{" "}
            solutions, and present their ideas to potential investors, partners,
            and customers. With a focus on{" "}
            <span className="text-secondary font-semibold">creativity</span>,
            <span className="text-secondary font-semibold">collaboration</span>,
            and community, TechnOcean is a platform for aspiring tech innovators
            and entrepreneurs to unleash their potential, gain hands-on
            experience working on real-world projects, and{" "}
            <span className="text-secondary font-semibold">
              make a positive impact in the world.
            </span>
          </p>
        </div>

        {/* lpu */}
        <div className="bg-[#2E2D2D] rounded-xl p-5 lg:py-10 lg:px-20 shadow-2xl mt-7 lg:mt-12 border border-[#605D5D]">
          <h1 className="text-xl lg:text-2xl text-center">
            About{" "}
            <span className="text-secondary">
              Lovely Professional University
            </span>
          </h1>
          <div className="my-4 lg:my-7">
            <img className="w-full" src={lpu} alt="LPU" />
          </div>
          <p className="font-m text-xs lg:text-base font-light">
            <span className="text-secondary font-semibold">
              Lovely Professional University (LPU)
            </span>{" "}
            is a multi-faculty research oriented institution with hi-tech campus
            offering more than 150 professional programmes. LPU campus is a
            complete world in itself having students from 28 states of India and
            more than 50 countries of the world.
          </p>
          <p className="font-m text-xs lg:text-base mt-2 lg:mt-3 font-light">
            LPU has all the makings of a{" "}
            <span className="text-secondary font-semibold">
              global institution
            </span>{" "}
            including internationally bench marked curricula, innovative
            pedagogy focused on experiential learning and research oriented,
            200+ foreign tie-ups, well qualified and experienced faculty,
            outstanding sports & cultural facilities, hostels, a shopping mall
            and hospital etc.
          </p>
        </div>

        {/* cse department */}
        <div className="bg-[#2E2D2D] rounded-xl p-5 lg:py-10 lg:px-20 shadow-2xl mt-7 lg:mt-12 border border-[#605D5D]">
          <h1 className="text-xl lg:text-2xl text-center">
            About <span className="text-secondary">School Of CSE LPU</span>
          </h1>
          <div className="my-4 lg:my-7">
            <img className="w-full" src={cse} alt="LPU" />
          </div>
          <p className="font-m text-xs lg:text-base font-light">
            School of{" "}
            <span className="text-secondary font-semibold">
              Computer Science and Engineering
            </span>
             is pioneer in building competencies of ever-changing technologies
            to make the engineers of today the leaders of tomorrow. The industry
            -based curriculum focused on innovation and research enable the
            students to code their way to success. With centres of excellence of
            Google, Microsoft, Intel, Apple iMac, Cisco, vmware, Automation
            Anywhere, Pega System and industrial tie-ups with IBM, Google Cloud,
            GeeksforGeeks, UpGrad, Informatica, Xebia, CompTIA, Transorg
            Analytics, Kalvi, Futurense and many more enable students to get a
            hands-on experience and challenge the status quo to set new
            benchmarks of placements. Experienced doctoral members of faculty
            enable competencies to develop applications and hack success with
            excellence.
          </p>
        </div>

        <div>
          <h1 className="text-center text-3xl mb-7 mt-10 lg:mt-16 lg:mb-10">
            Technocean <span className="text-secondary">Committees</span>
          </h1>

          <div className="bg-[#2E2D2D] rounded-xl p-3 lg:p-7 pb-6 shadow-2xl border border-[#605D5D]">
            <h1 className="text-center text-base lg:text-xl">Chief Patron</h1>
            <div className="flex items-center justify-evenly space-x-2 mt-3 lg:mt-10">
              <div className="h-24 w-24 lg:h-52 lg:w-52 rounded-xl border-2 border-secondary shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  className="scale-[1.4]"
                  src={chief_patron.image}
                  alt={chief_patron.name}
                />
              </div>
              <div>
                <h2 className="text-lg lg:text-2xl font-m font-semibold text-secondary">
                  {chief_patron.name}
                </h2>
                <p className="font-m font-medium text-sm lg:text-base">
                  {chief_patron.designation}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#2E2D2D] rounded-xl p-3 lg:p-7 pb-6 shadow-2xl border border-[#605D5D] mt-5 lg:mt-10">
            <h1 className="text-center text-base lg:text-xl">Patron</h1>
            <div className="flex items-center justify-evenly space-x-2 mt-3 lg:mt-10">
              <div className="text-right">
                <h2 className="text-lg lg:text-2xl text-secondary font-m font-semibold">
                  {patron.name}
                </h2>
                <p className="font-m font-medium text-sm lg:text-lg">
                  {patron.designation}
                </p>
              </div>
              <div className="h-24 w-24 lg:h-52 lg:w-52 rounded-xl border-2 border-secondary overflow-hidden flex items-center justify-center shadow-2xl">
                <img
                  className="scale-[1.4]"
                  src={patron.image}
                  alt={patron.name}
                />
              </div>
            </div>
          </div>

          <h1 className="text-center text-3xl mb-7 lg:mb-10 mt-10 lg:mt-16">
            <span className="text-secondary">Advisory</span> Committee
          </h1>

          <div className="flex items-center overflow-x-scroll space-x-3 adv">
            {advisory_commitee.map((ac) => (
              <div
                key={ac.name}
                className="bg-[#2E2D2D] rounded-xl p-5 shadow-xl border border-[#605D5D] flex flex-col items-center justify-between min-h-[200px] min-w-[155px]"
              >
                <div className="flex-1 flex items-end">
                  <div className="h-24 w-24 rounded-full overflow-hidden flex items-center justify-center border-2 border-secondary shadow-2xl">
                    <img
                      className="h-full w-full"
                      src={ac.image}
                      alt={ac.name}
                    />
                  </div>
                </div>
                <p className="font-m font-semibold text-[.8rem] text-center mt-3 mb-auto h-10">
                  {ac.name}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#2E2D2D] rounded-xl p-3 lg:p-7 pb-6 shadow-2xl border border-[#605D5D] mt-10 lg:mt-20">
            <h1 className="text-center text-base lg:text-xl">Program Chair</h1>
            <div className="flex items-center justify-evenly space-x-2 mt-3 lg:mt-10">
              <div className="h-24 w-24 lg:h-40 lg:w-40 rounded-xl border-2 border-secondary shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  className="h-full w-full"
                  src={program_chair.image}
                  alt={program_chair.name}
                />
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-m font-semibold text-secondary">
                  {program_chair.name}
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-[#2E2D2D] rounded-xl p-3 lg:p-7 pb-6 shadow-2xl border border-[#605D5D] mt-5">
            <h1 className="text-center text-base lg:text-xl">
              Program Co Chair
            </h1>
            <div className="flex items-center justify-evenly space-x-2 mt-3 lg:mt-10">
              <div>
                <h2 className="text-lg lg:text-xl text-secondary text-right font-m font-semibold">
                  {program_co_chair[0].name}
                </h2>
              </div>
              <div className="h-24 w-24 lg:h-40 lg:w-40 rounded-xl border-2 border-secondary shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  className="h-full w-full"
                  src={program_co_chair[0].image}
                  alt={program_co_chair[0].name}
                />
              </div>
            </div>
            <div className="flex items-center justify-evenly space-x-2 mt-5 lg:mt-10">
              <div className="h-24 w-24 lg:h-40 lg:w-40 rounded-xl border-2 border-secondary shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  className="h-full w-full"
                  src={program_co_chair[1].image}
                  alt={program_co_chair[1].name}
                />
              </div>
              <div>
                <h2 className="text-lg lg:text-xl text-secondary font-m font-semibold">
                  {program_co_chair[1].name}
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-[#2E2D2D] rounded-xl p-3 lg:p-7 pb-6 shadow-2xl border border-[#605D5D] mt-5 lg:mt-10">
            <h1 className="text-center text-base lg:text-xl">
              Program Secretary
            </h1>
            <div className="flex items-center justify-evenly space-x-2 mt-3 lg:mt-10">
              <div className="h-24 w-24 lg:h-40 lg:w-40 rounded-xl border-2 border-secondary shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  className="h-full w-full"
                  src={program_secretary.image}
                  alt={program_secretary.name}
                />
              </div>
              <div>
                <h2 className="text-lg lg:text-xl text-secondary font-m font-semibold">
                  {program_secretary.name}
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-[#2E2D2D] rounded-xl p-3 lg:p-7 pb-6 shadow-2xl border border-[#605D5D] mt-5 lg:mt-10">
            <h1 className="text-center text-base lg:text-xl">
              Program Joint Secretary
            </h1>
            <div className="flex items-center justify-evenly space-x-2 mt-3 lg:mt-10">
              <div className="text-right">
                <h2 className="text-lg lg:text-xl font-m font-semibold text-secondary">
                  {joint_secretary.name}
                </h2>
              </div>
              <div className="h-24 w-24 lg:h-40 lg:w-40 rounded-xl border-2 border-secondary shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  className="h-full w-full"
                  src={joint_secretary.image}
                  alt={joint_secretary.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
