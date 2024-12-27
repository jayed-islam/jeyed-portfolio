"use client";

// import { useGetExperiencesQuery } from "@/redux/reducers/experience/experienceApi";
// import React from "react";

// const HomeExperienceView = () => {
//   const { data, isFetching } = useGetExperiencesQuery({
//     searchTerm: "",
//   });
//   return (
//     <section className="experience section " id="experience">
//       <h2 className="section__title">EXPERIENCE OR WORK</h2>
//       <div className="experience__container container grid ">
//         <article className="experience__card">
//           <h2 className="experience__company">experince company</h2>
//           <div className="experience__data">
//             <h3 className="experience__profession">web development</h3>
//             <span className="experience__date">12-12-2</span>
//             <p className="experience__description">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
//               commodi?
//             </p>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default HomeExperienceView;
import { useGetExperiencesQuery } from "@/redux/reducers/experience/experienceApi";
import React from "react";
import { format } from "date-fns";

const HomeExperienceView = () => {
  const { data, isFetching } = useGetExperiencesQuery({
    searchTerm: "",
  });

  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">EXPERIENCE OR WORK</h2>
      <div className="experience__container container grid">
        {isFetching
          ? // Render shimmer placeholders while loading
            Array(3)
              .fill(0)
              .map((_, idx) => (
                <article
                  key={idx}
                  className="experience__card p-4 border rounded-md bg-white shadow-sm"
                >
                  <div className="h-6 w-1/2 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="experience__data mt-4">
                    <div className="h-4 w-1/3 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-1/4 bg-gray-300 rounded-md animate-pulse mb-4"></div>
                    <div className="h-16 w-full bg-gray-300 rounded-md animate-pulse"></div>
                  </div>
                </article>
              ))
          : // Render actual experience cards when data is loaded
            data &&
            data?.data?.experiences?.map((experience, idx) => (
              <article key={idx} className="experience__card">
                <h2 className="experience__company">{experience.company}</h2>
                <div className="experience__data">
                  <h3 className="experience__profession">{experience.title}</h3>
                  <h3 className="text-sm font-normal mb-4">
                    at - {experience.company}
                  </h3>
                  <span className="experience__date">
                    {" "}
                    {format(
                      new Date(experience.startDate),
                      "MM/dd/yyyy"
                    )} to{" "}
                    {experience.endDate
                      ? new Date(experience.endDate).toLocaleDateString()
                      : "Present"}
                  </span>
                  <div className="flex flex-col gap-3">
                    {experience?.activities?.map((item, idx) => (
                      <li key={idx} className="experience__description">
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
};

export default HomeExperienceView;
