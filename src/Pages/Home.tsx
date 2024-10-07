import HeroGraphics from "../assets/HeroGraphics.svg";
import Navbar from "../Components/Navbar";
import CustomButton from "../Components/CustomButton";
import Logo_Boldo from "../assets/Logo_Boldo.svg";
import Logo_Presto from "../assets/Logo_Presto.svg";
import services_one from "../assets/services_one.svg";
import services_two from "../assets/services_two.svg";
import services_three from "../assets/services_three.svg";
import MarketImage from "../assets/MarketImage.svg";
import MarketImage_two from "../assets/MarketImage_two.svg";
import checkIcon from "../assets/checkIcon.svg";
import sun from "../assets/sun.svg";
import eye from "../assets/eye.svg";
import star from "../assets/star.svg";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import man_one from "../assets/man_one.svg";
import man_two from "../assets/man_two.svg";
import man_three from "../assets/man_three.svg";
import office from "../assets/office.svg";
import downArrow from "../assets/downArrow.svg";
import profile_one from "../assets/profile_one.svg";
import profile_two from "../assets/profile_two.svg";
import profile_three from "../assets/profile_three.svg";
import project_one from "../assets/project_one.svg";
import project_two from "../assets/project_two.svg";
import project_three from "../assets/project_three.svg";
import Services from "../Components/Services";
import Testimonial from "../Components/Testimonial";
import ProjectManagement from "../Components/ProjectManagement";
import Footer from "../Components/Footer";

const Home = () => {
  const handleSignUpClick = () => {};

  return (
    <div>
      <section className="bg-[#FFFFFF] flex flex-col items-center justify-center pt-4 pb-20 px-10">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center items-center py-10">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <p className="w-[70%] text-[20px] md:text-[50px] text-[#000000] font-arial leading-normal mb-4">
              Save time by building fast with Boldo Template
            </p>
            <p className="w-[70%] pt-2 text-[10px] md:text-[16px] leading-normal text-[#777777]">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex justify-center md:justify-left items-center pt-4 gap-4 mt-8 pb-4">
              <button
                className="bg-[#0A2640] text-[10px] md:text-[15px] rounded-[25px] text-[#FFFFFF] p-2 md:p-4 w-[120px] md:w-[200px] font-bold"
                onClick={handleSignUpClick}
              >
                Buy template
              </button>
              <div className="">
                <CustomButton
                  width={"w-[120px] md:w-[150px]"}
                  textColor={"#0A2640"}
                  backgroundColor="#FFFFFF"
                  label={"Explore"}
                  transparent={false}
                  height={"h-[30px] md:h-[58px]"}
                  border="2px solid #0A2640"
                  onClick={handleSignUpClick}
                  borderRadius={"40px"} fontSize={"text-[10px] md:text-[18px]"}                />
              </div>
            </div>
          </div>
          <div className="flex px-10 md:px-0 justify-center items-center">
            <img src={HeroGraphics} className="w-[300px] md:w-[450px] h-[100%]" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
        <div className="pr-10 flex gap-2 justify-center items-center">
            <img src={Logo_Boldo} className="h-5 w-5 md:h-full"/>
            <p className="text-[#0A2640] text-[20px] md:text-[35px] font-semibold">Boldo</p>
          </div>
          <div className="pr-10 flex gap-2 justify-center items-center">
            <img src={Logo_Presto} className="h-5 w-5 md:h-full"/>
            <p className="text-[#0A2640] text-[20px] md:text-[35px] font-semibold">Presto</p>
          </div>
          <div className="pr-10 flex gap-2 justify-center items-center">
            <img src={Logo_Boldo} className="h-5 w-5 md:h-full"/>
            <p className="text-[#0A2640] text-[20px] md:text-[35px] font-semibold">Boldo</p>
          </div>
          <div className="pr-10 flex gap-2 justify-center items-center">
            <img src={Logo_Presto} className="h-5 w-5 md:h-full"/>
            <p className="text-[#0A2640] text-[20px] md:text-[35px] font-semibold">Presto</p>
          </div>
          <div className="pr-10 flex gap-2 justify-center items-center">
            <img src={Logo_Boldo} className="h-5 w-5 md:h-full"/>
            <p className="text-[#0A2640] text-[20px] md:text-[35px] font-semibold">Boldo</p>
          </div>
          <div className="pr-10 flex gap-2 justify-center items-center">
            <img src={Logo_Presto} className="h-5 w-5 md:h-full"/>
            <p className="text-[#0A2640] text-[20px] md:text-[35px] font-semibold">Presto</p>
          </div>
        </div>
      </section>
      <section className="bg-[#0A2640] text-[#FFFFFF] flex flex-col items-center justify-center">
        <div className="md:w-[50%] text-center items-center justify-center py-20 px-10">
          <h3 className="text-[15px] md:text-[25px]">Our services</h3>
          <h1 className="text-center text-[20px] md:text-[35px] items-center justify-center leading-normal my-4">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="flex flex-col gap-[50px] lg:flex-row md:gap-[150px] pb-20">
          <Services service={"Cool feature title"} image={services_one} />
          <Services service={"Even cooler feature"} image={services_two} />
          <Services service={"Cool feature title"} image={services_three} />
        </div>
      </section>

      <section
        id=""
        className="bg-[#FFFFFF] flex flex-col items-center justify-center pt-10"
      >
        <div className="flex flex-col lg:flex-row pt-10 items-center justify-center gap-4 md:gap-2 lg:gap-32">
          <div className="flex items-center">
            <img src={MarketImage} className="w-[300px] h-[350px] md:w-[500px] md:h-[700px]" />
          </div>

          <div className="flex flex-col items-center px-10 w-full md:px-0 md:w-[35%]">
            <div className="flex text-[#000000] text-[20px] md:text-[30px] md:pt-20">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </div>
            <div className="flex flex-col gap-10 justify-left items-start py-10">
              <div className="flex text-[#000000] text-[10px] md:text-[15px] items-center justify-center gap-6">
                <img src={checkIcon} className="" />
                <p className="text-[#000000]">
                  We connect our customers with the best.
                </p>
              </div>
              <div className="flex text-[#000000] text-[10px] md:text-[15px] items-center justify-center gap-6">
                <img src={checkIcon} className="" />
                <p className="text-[#000000]">
                  Advisor success customer launch party.
                </p>
              </div>
              <div className="flex text-[#000000] text-[10px] md:text-[15px] items-center justify-center gap-6">
                <img src={checkIcon} className="" />
                <p className="text-[#000000]">
                  Business-to-consumer long tail.
                </p>
              </div>
              <button
                className="bg-[#0A2640] rounded-[25px] text-[#FFFFFF] p-4 px-14 font-bold"
                onClick={handleSignUpClick}
              >
                Start now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id=""
        className="bg-[#FFFFFF] flex flex-col items-center justify-center py-20"
      >
        <div className="flex flex-col lg:flex-row pt-10 items-center justify-center gap-8 md:gap-4 lg:gap-32">
          <div className="flex flex-col items-center px-10 w-full md:px-0 md:w-[35%]">
            <div className="flex text-[#000000] text-[20px] md:text-[30px] pt-10">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </div>
            <div className="flex flex-col gap-10 md:justify-left md:items-start py-10">
              <div className="flex text-[#000000] bg-[#0A2640] text-[10px] items-center gap-6 rounded-[10px] w-[300px] md:w-[500px] py-6 px-4">
                <img src={star} className="" />
                <p className="text-[#FFFFFF]">
                  We connect our customers with the best.
                </p>
              </div>
              <div className="flex text-[#000000] bg-[#FFFFFF] text-[10px] items-center gap-6 shadow-lg rounded-[10px] w-[300px] md:w-[500px] py-6 px-4">
                <img src={eye} className="" />
                <p className="text-[#000000]">
                  Advisor success customer launch party.
                </p>
              </div>
              <div className="flex text-[#000000] bg-[#FFFFFF] text-[10px] items-center gap-6 shadow-lg rounded-[10px] w-[300px] md:w-[500px] py-6 px-4">
                <img src={sun} className="" />
                <p className="text-[#000000]">
                  Business-to-consumer long tail.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-100 h-100">
            <img src={MarketImage_two} className="w-[300px] h-[350px] md:w-[500px] md:h-[700px]" />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#0A2640] flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row md:justify-between py-10">
          <h1 className="md:w-[80%] text-[#FFFFFF] px-10 text-[30px] md:text-[40px] leading-normal my-4">
            An enterprise template to ramp up your company website
          </h1>
          <div className="flex flex-row gap-8 items-end justify-end md:w-20 lg:flex hidden">
            <img src={leftArrow} />
            <img src={rightArrow} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[40px] xl:gap-[80px] pb-20">
          <Testimonial
            testimonial={
              "Buyer buzz partner network disruptive non-disclosure agreement business"
            }
            name={"Albus Dumbledore"}
            image={man_one}
            position={"Manager @ Howarts"}
          />
          <Testimonial
            testimonial={
              "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."
            }
            name={"Severus Snape"}
            image={man_two}
            position={"Manager @ Slytherin"}
          />
          <Testimonial
            testimonial={
              "Release facebook responsive web design business model canvas seed money monetization."
            }
            name={"Harry Potter"}
            image={man_three}
            position={"Team Leader @ Gryffindor"}
          />
        </div>
      </section>
      <section className="w-full bg-[#FFFFFF] flex flex-col items-center justify-center py-20">
        <div className="px-10">
        <img src={office} />
        </div>
        <div className="flex flex-col lg:flex-row pt-10 items-center justify-center gap-8 md:gap-2 lg:gap-40">
          <div className="flex text-[#000000] text-[20px] px-10 md:text-[40px] pt-10 w-[300px] md:w-[530px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </div>
          <div>
            <div className="flex text-[#000000] bg-[#FFFFFF] text-[15px] items-center justify-start gap-6 border-b w-[300px] md:w-[400px] py-6 px-4">
              <p className="text-[#000000] w-[400px]">
                We connect our customers with the best?
              </p>
              <img src={downArrow} className="" />
            </div>
            <div className="flex text-[#000000] bg-[#FFFFFF] text-[15px] items-center justify-start gap-6 border-b w-[300px] md:w-[400px] py-6 px-4">
              <p className="text-[#000000] w-[400px]">
                Android research & development rockstar?
              </p>
              <img src={downArrow} className="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFFFFF] flex flex-col items-center justify-center py-10">
        <div className="md:w-[50%] text-center items-center justify-center py-4 px-10">
          <h3 className="text-[25px] text-[#777777]">Our Blog</h3>
          <h1 className="text-[#000000] text-center text-[15px] md:text-[25px] lg:text-[40px] items-center justify-center leading-normal my-4">
            Value proposition accelerator product management venture
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-[50px] pb-20 px-10 items-center justify-center">
          <ProjectManagement
            projectImage={project_one}
            product={"Pitch termsheet backing validation focus release."}
            date={"November 22, 2021"}
            image={profile_one}
            name={"Chandler Bing"}
          />
          <ProjectManagement
            projectImage={project_two}
            product={
              "Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
            }
            date={"November 22, 2021"}
            image={profile_two}
            name={"Rachel Green"}
          />
          <ProjectManagement
            projectImage={project_three}
            product={
              "Beta prototype sales iPad gen-z marketing network effects value proposition"
            }
            date={"November 22, 2021"}
            image={profile_three}
            name={"Monica Geller"}
          />
        </div>
        <div className="">
          <CustomButton
            width={"w-[100px] md:w-[200px]"}
            textColor={"#0A2640"}
            backgroundColor="#FFFFFF"
            label={"Load more"}
            transparent={false}
            height={"h-[40px] md:h-[55px]"}
            border="3px solid #0A2640"
            onClick={handleSignUpClick}
            borderRadius={"40px"} fontSize={""}          />
        </div>

        <div className="w-[300px] md:w-[700px] lg:w-[1300px] rounded-[20px] bg-[#0A2640] flex flex-col items-center justify-center my-10 md:my-20 md:py-14">
          <h1 className="w-[80%] md:w-[55%] text-[#FFFFFF] text-center items-center justify-center text-[20px] md:text-[40px] my-4">
            An enterprise template to ramp up your company website
          </h1>
          <div className="flex flex-row gap-4 py-4">
            <input
              className="bg-[#FFFFFF] text-[#000000] rounded-[30px] w-[150px] md:w-[300px]"
              placeholder="Your email address"
            ></input>
            <button
              className="bg-[#65E4A3] rounded-[25px] text-[#0A2640] p-4 md:px-14 font-bold"
              onClick={handleSignUpClick}
            >
              Start now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
