import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("07pkumaran1996@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20 " id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* grid1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png "
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> Hi I'm Prem Kumar</p>
              <p className="grid-subtext">
                With 4 years of experience , I have honed my skills in Front-end
                & Backend Development , with a focus on creative 3D visuals and
                websites
              </p>
            </div>
          </div>
        </div>

        {/* grid 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/MERN_Stack.png"
              alt="grid-2"
              className="w-full sm:w-[376px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript, focusing on full-stack development
                with the MERN stack (MongoDB, Express.js, React.js, Node.js) to
                build scalable applications with dynamic frontends and robust
                backends.
              </p>
            </div>
          </div>
        </div>

        {/* grid 3 */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center ">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 13.0262867,
                    lng: 80.1822523,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Tiruvannamalai , Tamil Nadu , India and open to remote
                work worldwide.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* grid 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession - its my passion.
              </p>
            </div>
          </div>
        </div>

        {/* grid 5 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center"> Contact me</p>
              <p className="grid-subtext text-center  text-white">
                Feel free to reach out for collaborations or just a friendly
                hello !
              </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  07pkumaran1996@gmail.com || premkumar.dev0@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
