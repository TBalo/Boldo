
type ProjectManagementProps = {
  projectImage: string;
  product: string;
  date: string;
  image: string;
  name: string;
};

const ProjectManagement = ({ projectImage, product, date, name, image }: ProjectManagementProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-[300px] md:w-[350px]">
      <img src={projectImage} className="rounded-[10px] w-full"/>
      </div>
      <div className="flex flex-row gap-4"><p className="text-[#0A2640] font-bold">Category</p> <p className="text-[#777777]">{date}</p></div>
      <p className="text-[15px] md:text-[25px] w-[300px] md:w-[350px] h-[40px] md:h-[130px] text-[#000000]">{product}</p>
      <div className="flex gap-2 w-[190px] items-center">
        <img src={image} className="w-10 h-10" />
        <div className="flex flex-col justify-center gap-1">
          <p className="font-bold text-[#000000] text-[12px]">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
