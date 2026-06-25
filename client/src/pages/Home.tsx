import { FaArrowRight } from "react-icons/fa"
import HighlightedText from "../components/HomePage/HighlightedText"
import HighlightedBtn from "../components/HomePage/HighlightedBtn"
import HomePageBanner from "../assets/Images/boxoffice.png"
import CodeBlock from "../components/HomePage/CodeBlock"
import CardSection from "../components/HomePage/CardSection"

const Home = () => {
  
  return (
    <div className="w-11/12 mx-auto">
      {/* section1 -> instructor btn, heading, para, authBtn */}
      <div className="pt-4 sm:pt-20 w-full mx-auto">
        <div className="flex flex-col gap-4">
          {/* instructor btn */}
          <div className="w-full">
            <div className="flex justify-start sm:justify-center">
              <div className="border border-[#0d1118] rounded-[100px] py-2 px-4.5 flex items-center gap-2.5 bg-[#161D29] text-[#999DAA] font-medium hover:scale-95 transition-all duration-200 shadow-sm shadow-[#40464f]">
                <p>Become an Instructor</p>
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* heading */}
          <div className="w-full flex justify-start sm:justify-center mt-4">
            <div className="text-[#F1F2FF] font-semibold text-3xl sm:text-4xl leading-7 sm:leading-11 tracking-[-2%]">
              <p>Empower Your Future with <HighlightedText text="Coding School" /> </p>
            </div>  
          </div> 
          
          {/* para */}
          <div className="w-full">
            <p className="text-[#838894] text-left sm:text-center font-medium">With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
          </div>

          {/* auth btns */}
          <div className="w-full flex items-center justify-start sm:justify-center gap-6">
            <HighlightedBtn btnText="Learn More" path="/signup" isPrimaryBtn={true} />
            <HighlightedBtn btnText="Book a Demo" path="/login" isPrimaryBtn={false} />
          </div>
        </div>
      </div>

      {/* section2 -> Image */}
      <div className="w-full mt-14">
        <div className="flex justify-center">
          <img
            src={HomePageBanner}
          />
        </div>
      </div>
      
      {/* section3 -> code block */}
      <div className="w-full mt-28">
        <div className="flex flex-col gap-20 items-center w-[80%] mx-auto">
          <CodeBlock 
            heading={
              <div className="text-[#F1F2FF] font-semibold text-[36px] leading-11 tracking-[-2%]">
                Unlock your <HighlightedText text="coding potential" /> with our online courses. 
              </div>
            }
            para="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            btnText1="Try it Yourself"
            btnText2="Learn More"
            isReverse={false}
          />
    
          <CodeBlock 
            heading={
              <div className="text-[#F1F2FF] font-semibold text-[36px] leading-11 tracking-[-2%]">
                Start <HighlightedText text="coding in seconds" />.
              </div>
            }
            para="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            btnText1="Continue Lesson"
            btnText2="Learn More"
            isReverse={true}
          />
        </div>
      </div>

      {/* section4 -> cards */}
      <CardSection />


    </div>
  )
}

export default Home
