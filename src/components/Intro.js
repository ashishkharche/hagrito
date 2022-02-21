import React from "react";

export const Intro = () => {
  return (
    <section className="mt-1 mb-14">
      <h1 className="mb-4 text-4xl font-semibold tracking-wide md:text-5xl">
        Hagrito
      </h1>
      <p className="max-w-2xl text-xl">
          Technical Essentials Handbook. 
      </p>
      <p>
          For skill stacking, programming experimentations and tech notes.
      </p>
        <img src="/img/hagrito-banner.png" width="100%" className="max-w-2xl" />
      <div className="my-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      </div>
    </section>
  );
};
