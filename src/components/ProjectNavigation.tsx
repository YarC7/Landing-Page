"use client";
import { FC } from "react";
import Link from "next/link";
interface ProjectNavigationProps {
  previousProject?: {
    name: string;
    href: string;
  };
  nextProject?: {
    name: string;
    href: string;
  };
  className?: string;
}

const ProjectNavigation: FC<ProjectNavigationProps> = ({
  previousProject,
  nextProject,
  className,
}) => {
  return (
    <div
      className={
        "flex justify-between items-center w-full py-6 mt-8 border-t border-[#e0e0e0]"
      }
    >
      {previousProject ? (
        <Link
          href={previousProject.href}
          className="flex items-center text-black hover:opacity-70 transition duration-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-3"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <div className="flex flex-col">
            {/* <span className="text-xs text-gray-500 uppercase">Vorige</span> */}
            <span className="text-base font-medium">
              {previousProject.name}
            </span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextProject ? (
        <Link
          href={nextProject.href}
          className="flex items-center text-black hover:opacity-70 transition duration-300 group ml-auto"
        >
          <div className="flex flex-col items-end">
            {/* <span className="text-xs text-gray-500 uppercase">Volgende</span> */}
            <span className="text-base font-medium">{nextProject.name}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-3"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ProjectNavigation;
