import image from "../assets/image.png";
import linkin from "../assets/linkin.png";
import git from "../assets/github.png";
import phone from "../assets/iphone.png";

function HeaderSection() {
  return (
    <section id="headersection" className="bg-[#000000]  w-screen h-screen">
      <header
        id="name"
        className="bg-white h-[15%] flex flex-row items-center justify-between text-8xl text-black font-[noto]"
      >
        <h1 className="w-[20%] pl-5">YW</h1>
        <header
          id="navbar"
          className="flex flex-row items-center justify-evenly text-2xl w-[60%]"
        >
          <div className="hover:border-b-2 border-black transition ease-in-out duration-300">
            ABOUT
          </div>
          <div className="hover:border-b-2 border-black transition ease-in-out duration-700">
            SKILL
          </div>
          <div className="hover:border-b-2 border-black transition ease-in-out duration-700">
            PROJECT
          </div>
          <div className="hover:border-b-2 border-black transition ease-in-out duration-700">
            CONTACT
          </div>
        </header>
        <header
          id="icons"
          className="flex flex-row items-center justify-end w-[20%] pr-5"
        >
          <img src={linkin} alt="linkin" className="w-[10%] p-1" />
          <img src={git} alt="git" className="w-[10%] p-1" />
          <img src={phone} alt="phone" className="w-[10%] p-1" />
        </header>
      </header>
      <mian
        id="main-header"
        className="font-[noto] flex felx-row justify-center items-center h-[80%] "
      >
        <div
          id="image-about"
          className="flex items-center content-center relative "
        >
          {/* <div className="h-[50%] w-[100%] absolute border border-white left-[10%]"></div> */}
          <img
            src={image}
            alt="Developer"
            className="w-[600px] h-[600px] saturate-50 brightness-100 contrast-125"
          />
        </div>
        <div
          id="message-about"
          className="flex flex-col justify-center items-center h-[100%] w-[50%] text-[#C6C6C6]"
        >
          {/* <h2 className="text-5xl pt-[15%] pb-[5%] pl-[15%]">Hello.., </h2> */}
          <span className="text-7xl p-[2%]  text-white">Yanee Wiboonsak</span>
          <p className="text-5xl ">Full Stack developer.</p>
          <button className="text-white font-[abel] text-xl border border-white h-[6%] w-[18%] mt-20 ">
            CONTACT ME
          </button>
        </div>

        <hr className="bg-white w-[87%] absolute top-[86.3%] right-[18%] " />
        <hr className="bg-white w-[95%] absolute top-[88%] right-[10%] " />
      </mian>
    </section>
  );
}

export default HeaderSection;
