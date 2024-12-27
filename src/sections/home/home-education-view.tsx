import React from "react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "ABC University",
    year: "2018 - 2022",
    description: "Graduated with honors, specializing in software development.",
  },
  {
    degree: "High School Diploma",
    institution: "XYZ High School",
    year: "2016 - 2018",
    description: "Focused on mathematics, physics, and computer science.",
  },
];

const EducationSection = () => {
  return (
    <section className="education section" id="educations">
      <h2 className="section__title">EDUCATION</h2>

      <div className="education__container container grid">
        {educationData.map((edu, index) => (
          <article className="education__card" key={index}>
            <div className="">
              <span className="text-4xl">🎓</span>
            </div>
            <h3 className="services__name">{edu.degree}</h3>
            <p className="services__description">{edu.institution}</p>
            <p className="services__description">{edu.year}</p>
            <p className="services__description">{edu.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
