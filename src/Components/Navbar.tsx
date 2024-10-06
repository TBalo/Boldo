import Logo_Boldo from "../assets/Logo_Boldo.svg";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="bg-[#FFFFFF] md:p-4 w-full flex flex-row items-center justify-center">
      <div className="container mx-auto flex gap-8 items-center md:justify-between">
        <div className="flex gap-1 md:gap-2 justify-center items-center">
          <img src={Logo_Boldo} className="h-2 w-2 md:w-full h-full" />
          <p className="text-[#0A2640] text-[10px] md:text-[45px] font-semibold">
            Boldo
          </p>
        </div>
        <div className="flex space-x-4 md:space-x-14 text-[8px] md:text-[18px] items-center justify-right">
          <a
            href="#features"
            className="text-[#002639] hover:text-gray-300 font-bold"
          >
            Products
          </a>
          <a
            href="#behind-the-scenes"
            className="text-[#002639] hover:text-gray-300 font-bold"
          >
            Services
          </a>
          <a
            href="#developers"
            className="text-[#002639] hover:text-gray-300 font-bold"
          >
            About
          </a>
          <div className="">
            <CustomButton
              width={"w-[50px] md:w-[100px]"}
              textColor={"#0A2640"}
              backgroundColor="#FFFFFF"
              label={"Log In"}
              transparent={false}
              height={"h-[] md:h-[40px]"}
              border="1px solid #0A2640"
              onClick={() => {}}
              borderRadius={"20px"}
              fontSize={"text-[8px] md:text-[14px]"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
