import image from "../assets/image.png";

function HeaderSection() {
  return (
    <section id="headersection" className="bg-[#F5F9FF]  w-screen h-screen">
      <header
        id="navbar"
        className="flex flex-row items-center justify-end h-[10%] text-lg font-bold text-[#004994]"
      >
        <div className="p-[5%]">ABOUT</div>
        <div className="p-[5%]">SKILL</div>
        <div className="p-[5%]">PORTFOLIO</div>
        <div className="p-[6%]">CONTACT</div>
      </header>
      <mian
        id="main-header"
        className="font-[Lora] flex felx-row justify-center items-center h-[90%]"
      >
        <div
          id="image-about"
          className="bg-[#151e3d] rounded-full flex content-center h-[100%]"
        >
          <img
            src={image}
            alt="Developer"
            className="context-center rounded-full w-[650px] saturate-50 brightness-100"
          />
        </div>
        <div
          id="message-about"
          className="flex flex-col justify-start items-start h-[100%] w-[50%] text-[#838FBB]"
        >
          <h2 className="text-8xl pt-[15%] pb-[10%] pl-[15%]">Hello..,</h2>
          <span className="text-5xl pb-[1%] pl-[15%]">I'm </span>
          <span className="text-7xl p-[2%] pl-[15%] text-[#004994]">
            Yanee Wiboonsak
          </span>
          <p className="text-5xl pl-[15%]">Full Stack developer.</p>
          <br className="bg-[#6F8193] h-[5%]" />
        </div>
      </mian>
    </section>
  );
}

export default HeaderSection;
