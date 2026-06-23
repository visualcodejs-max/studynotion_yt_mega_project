import { useState } from "react";
import { HomePageCards, type ICourseHome } from "../../data/homepage_cards";
import { CgProfile } from "react-icons/cg";
import { PiTreeViewDuotone } from "react-icons/pi";

const data: string[] = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const Tab = () => {
  const [currentTab, setCurrentTab] = useState<string>("Free");
  const currentCourses = HomePageCards.filter(
    (course) => course.tag === currentTab
  )[0].courses;
  const [selectedCourse, setSelectedCourse] = useState<ICourseHome | null>(
    currentCourses[0]
  );

  return (
    <div className="mt-4 w-full flex flex-col items-center">
      {/* tabs */}
      <div className="border border-[#1e1e1f] bg-[#000814f0] rounded-xl flex items-center justify-center gap-2 px-3.5 py-2 w-fit">
        {data.map((tab: string, index: number) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-1.5 rounded-lg ${
              currentTab === tab ? "bg-[#18191a]" : ""
            }`}
            onClick={() => {
              setCurrentTab(tab);

              const courses =
                HomePageCards.find((c) => c.tag === tab)?.courses ?? [];

              setSelectedCourse(courses[0] ?? null);
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* courses */}
      <div className="mt-8 flex items-center justify-between gap-9">
        {currentCourses?.map((course: ICourseHome) => (
          <div
            onClick={() => setSelectedCourse(course)}
            className={`px-6 py-6 flex flex-col ${
              selectedCourse === course ? "bg-white" : "bg-[#161D29]"
            } w-full cursor-pointer`}
          >
            {/* top */}
            <div className="flex flex-col gap-3">
              {/* heading */}
              <h1
                className={`${
                  selectedCourse === course
                    ? "text-[#161D29]"
                    : "text-[#DBDDEA]"
                } font-semibold text-xl`}
              >
                {course.heading}
              </h1>

              {/* desc */}
              <p
                className={`${
                  selectedCourse === course
                    ? "text-[#585D69]"
                    : "text-[#6E727F]"
                } font-medium`}
              >
                {course.description}
              </p>
            </div>

            {/* bottom */}
            <div className="px-4 py-2 flex items-center justify-between border border-[#C5C7D4] mt-12">
              <div
                className={`font-medium ${
                  selectedCourse === course
                    ? "text-[#0A5A72]"
                    : "text-[#838894]"
                } flex items-center gap-1`}
              >
                <CgProfile className="text-xl" />
                {course.level}
              </div>
              <div
                className={`font-medium ${
                  selectedCourse === course
                    ? "text-[#0A5A72]"
                    : "text-[#838894]"
                } flex items-center gap-1`}
              >
                <PiTreeViewDuotone />
                {course.lessionNumber} Lessons
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
