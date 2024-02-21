import moment from "moment";
import Link from "next/link";
import React from "react";
import { Button } from "../button";
import { Skeleton } from "../skeleton";

const LoaderCard = () => {
  return (
    <div>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Skeleton className="h-56 bg-gray-300 w-full object-cover" />

        <div className="bg-white p-4 sm:p-6">
          <Skeleton className="bg-gray-300 w-full h-5 " />
          <Skeleton className=" bg-gray-300 w-full h-5 " />

          <div className="flex items-center space-x-5 mt-4 justify-between">
            <Skeleton className="bg-gray-300 w-[40%]  h-7   " />
            <Skeleton className="bg-gray-300 w-[40%]  h-7  " />
          </div>
        </div>
      </article>
    </div>
  );
};

export default LoaderCard;
