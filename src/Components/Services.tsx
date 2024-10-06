import arrow_right from "../assets/arrow_right.svg";

type ServicesProps = {
  service: string;
  image: string;
};

const Services = ({ service, image }: ServicesProps) => {
  return (
    <div className="flex flex-col gap-8 w-full items-center md:items-start">
      <img src={image} className="block h-[300px] w-[300px] md:h-full md:w-auto self-start"/>
      <div className="text-center items-center justify-center">
      <p className="text-[20px] md:text-[30px]">{service}</p>
      <a href="" className="text-[#002639] hover:text-gray-300">
        <div className="flex gap-2 border-b w-[150px] md:w-[190px]">
          <p className="text-[#FFFFFF] text-center font-bold text-[16px] md:text-[24px]">Explore page</p>
          <img src={arrow_right}/>
        </div>
      </a>
      </div>
    </div>
  );
};

export default Services;
