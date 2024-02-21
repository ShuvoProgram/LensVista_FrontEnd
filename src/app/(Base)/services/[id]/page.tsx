"use client";
import { useGetReviewQuery } from "@/redux/feature/review/reviewApi";
import { Rating } from "@smastrom/react-rating";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = ({ params }: any) => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = params;

  const { data } = useGetReviewQuery(id);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_API}/service/${id}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setServices(data.data); // Assuming the response has a 'data' property
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.error("Error fetching data:", error);
      });
  }, [params, id]);

  const {
    banner,
    title,
    description,
    price,
    isBooked,
    availability,
  }: any = services;

  return (
    <div>
<div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">

  <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
    <img className="w-full" alt="image of a girl posing" src={banner} />
  </div>
  <div className="md:hidden">
    <img className="w-full" alt="image of a girl posing" src={banner} />
  </div>
  <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
    <div className="border-b border-gray-200 pb-6">
      <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{title}</h1>
    </div>
    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
      <p className="text-base leading-4 text-gray-800 dark:text-gray-300">availability</p>
      <div className="flex items-center justify-center">
        {
          availability === true ? (
            <p className="text-sm leading-none text-green-600 dark:text-gray-300">Yes</p>
            ) : (
            <p className="text-sm leading-none text-red-600 dark:text-gray-300">No</p>
          )
        }
      </div>
    </div>
    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
      <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Price</p>
      <div className="flex items-center justify-center">
        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">$ {price}</p>
        <svg className="text-gray-300 dark:text-white cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <Link href={`/booking?productId=${id}`}>
    <button className="bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 text-base flex items-center justify-center leading-none text-white w-full py-4">
      <svg className="mr-3 text-white dark:text-gray-900" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.66699 4.83333V4.84166" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.333 11.5V11.5083" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      Booking Now
    </button>
    </Link>
    <div>
      <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">{description}</p>
    </div>
    <div>
      
    </div>
  </div>
</div>
      <div>
        <p className="px-3 py-px my-4 font-semibold tracking-wider uppercase rounded-full text-center text-xl">
          All Reviews
        </p>

        <div>
          {data?.data?.map((e: any) => (
            <article
              key={e?.id}
              className="border rounded p-2"
            >
              <div className="flex items-center mb-4 space-x-4 ">
                <img
                  className="w-10 h-10 rounded-full"
                  src={e?.user?.profileImage}
                  alt=""
                />
                <div className="space-y-1 font-medium dark:text-white">
                  <p>
                    {e?.user?.name}
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined on{" "}
                      {moment(e?.user?.createdAt).format(
                        "MMM Do YY"
                      )}
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={parseInt(e?.rating)}
                  readOnly={true}
                  // onChange={setRating}
                />
              </div>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {e?.message}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
