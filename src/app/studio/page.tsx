import ProjectNavigation from "@/components/ProjectNavigation";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="relative h-[850px] pt-12 flex items-center">
        <div className="px-4 sm:flex justify-evenly h-full">
          {/* bg-gradient-to-r from-[#f3e7e9] to-[#e3eeff] */}
          <div className="md:w-3/4 w-full flex md:flex-row flex-col">
            <div className="md:w-1/2 w-full flex flex-col gap-8">
              <h1 className="text-2xl leading-[48px] text-gray-700 pt-6">
                Studio
              </h1>
              <h1 className="text-2xl text-gray-700">
                Delta & Atelier Architecture
              </h1>
              <div className="flex flex-col gap-4 md:w-4/5">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <br />
                  Sunt perferendis ex sint officia iusto consectetur, obcaecati
                  sapiente esse quo dolorem, tempora iure. Mollitia, velit
                  facere voluptas ea assumenda saepe corporis!
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis ab error facere ullam amet ducimus iure illum
                  voluptates, eos aperiam praesentium iusto totam nostrum beatae
                  itaque excepturi dolores distinctio voluptatibus!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis ab error facere ullam amet ducimus iure illum
                  voluptates, eos aperiam praesentium iusto totam nostrum beatae
                  itaque excepturi dolores distinctio voluptatibus!
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col items-center  gap-8">
              <div className="md:px-4 pt-6">
                <div>
                  <Image src="/studio.jpg" alt="" width={350} height={350} />
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProjectNavigation
          nextProject={{
            name: "Team",
            href: "/team",
          }}
        />
      </div>
    </div>
  );
};

export default About;
