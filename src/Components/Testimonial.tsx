
type TestimonialProps = {
  testimonial: string;
  name: string;
  image: string;
  position: string;
};

const Testimonial = ({
  testimonial,
  name,
  image,
  position,
}: TestimonialProps) => {
  return (
    <div className="flex flex-col h-[100%] text-[#000000] gap-8 bg-[#FFFFFF] shadow-lg rounded-[10px] w-[300px] px-10 py-10">
      <p className="text-[24px]">“{testimonial}”</p>
      <div className="flex gap-2 w-[190px] items-center">
        <img src={image} className="w-10 h-10" />
        <div className="flex flex-col justify-center gap-1">
          <p className="font-bold text-[12px]">{name}</p>
          <p className="text-[9px]">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
