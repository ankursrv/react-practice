import React from "react";

const Section = ({ id, title, children, className }) => {
  return (
    <section
      id={id || ""}
      className={`${
        className ? className : "bg-red-400"
      } py-28 flex justify-center`}
    >
      <div className="w-[1200px] mx-auto px-5 flex flex-col items-center">
        {title && (
          <div className="w-full max-w-lg text-center text-white">
            <h2 className="text-[42px] mb-8 font-bold">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
