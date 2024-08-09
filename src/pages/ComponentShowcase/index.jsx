import React from "react";
import ReuseableButton from "../../component/ReuseableButton";
import SectionWrapper from "../../component/SectionWrapper";

const ComponentShowcase = () => {
  return (
    <>
      <SectionWrapper title="Reuseable Button">
        <div className="flex gap-6">
          <ReuseableButton primary>Button Style Primary</ReuseableButton>

          <ReuseableButton secondary>Button Style Primary</ReuseableButton>

          <ReuseableButton tertery>Button Style Primary</ReuseableButton>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-black">
        <div className="grid md:grid-cols-2 items-center">
          <div className="md:max-w-[500px]">
            <img src="/images/tech-icons.png" alt="html,css,js,php" />
          </div>
          <div className="text-white">
            <h2 className="text-[42px] mb-8 font-bold">Skills</h2>
            <p className="text-lg font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="using Props Title in this SectionWrapper"></SectionWrapper>

      <SectionWrapper className="bg-dodgerblue">
        Wrapper SectionWrapper
      </SectionWrapper>
    </>
  );
};

export default ComponentShowcase;
