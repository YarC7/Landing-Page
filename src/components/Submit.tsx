"use client";
import { useFormStatus } from "react-dom";

export const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="block w-max mx-auto p-2 text-white bg-black rounded disabled:bg-gray-500"
      disabled={pending}
    >
      Submit
    </button>
  );
};
