import Logo_Boldo from "../assets/Logo_Boldo.svg";

const Footer = () => {
  return (
    <footer  className="bg-[#FFFFFF] flex flex-row justify-center py-10">
        <div className="flex flex-col items-left gap-4 md:gap-14 w-[100px] md:w-[200px] lg:w-[600px]">
          <div className="pr-10 flex gap-2">
            <img src={Logo_Boldo} className="h-5 w-5 md:h-full"/>
            <p className="text-[#0A2640] text-[14px] md:text-[35px] font-semibold">Boldo</p>
          </div>
          <p className="w-[100px] md:w-[200px] lg:w-[300px] pt-2 text-[8px] md:text-[14px] lg:text-[20px] leading-normal text-[#777777]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="pt-2 text-[8px] md:text-[16px] leading-normal text-[#777777]">
            All rights reserved.
          </p>
        </div>
        <div className="flex flex-row gap-3 md:gap-12 lg:gap-32 text-[8px] md:text-[15px] lg:text-[25px] w-[190px] w-[300px] lg:w-[700px]">
          <div className="flex flex-col gap-4 md:gap-10">
            <p className="text-[#000000] font-bold">Landings</p>
            <p className="text-[#777777]">Home</p>
            <p className="text-[#777777]">Products</p>
            <p className="text-[#777777]">Services</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-10">
            <p className="text-[#000000] font-bold">Company</p>
            <p className="text-[#777777]">Home</p>
            <div className="flex flex-row gap-4"><p className="text-[#777777]">Careers</p>
            <p className="bg-[#65E4A3] text-[8px] md:text-[12px] text-[#0A2640] font-bold items-center justify-center text-center py-2 rounded-[20px] px-2">Hiring!</p>
            </div>
            <p className="text-[#777777]">Services</p>
          </div>
          <div className="flex flex-col gap-4 md:gap-10">
            <p className="text-[#000000] font-bold">Resources</p>
            <p className="text-[#777777]">Blog</p>
            <p className="text-[#777777]">Products</p>
            <p className="text-[#777777]">Services</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
