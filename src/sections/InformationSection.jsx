import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default function InformationSection() {
  return (
    <section>
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-x-20 mx-auto items-start">
        <Education />
        <Experience />
      </div>
      <Skills />
    </section>
  );
}
