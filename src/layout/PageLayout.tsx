import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-[#FFFFFF]">
          <div className="w-[100%] ml-auto relative">
            <Outlet />
          </div>
        </div>
    </>
  );
};

export default PageLayout;