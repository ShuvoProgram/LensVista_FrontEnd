"use client";
import { useGetNewsQuery } from "@/redux/feature/news/newsApi";
import React from "react";
import CategoryLoader from "./NewsLoader";
import Link from "next/link";
import Image from "next/image";

const NewsSection = () => {
  const { data: news, isLoading } =
  useGetNewsQuery(1);
  console.log(news?.data);
  return (
    <div>
      {/* <!-- Container for demo purpose --> */}
      <div className="container my-24 mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-center md:text-left">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Latest News
          </h2>
          <>
          {
            isLoading ? (
              <>
              {[1, 2]?.map((news: any, i: any) => (
                <CategoryLoader key={i}/>
              ))}
              </>
            ) : 
            (
              <>
              {
                news?.data?.map((
                  data: any, i: any
                ) => (
                  <div className="mb-6 flex flex-wrap" key={i}>
            <div className="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
              <div
                className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                width={400}
                height={400}
                src={data?.banner ? data?.banner : `https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg`}
                  className="w-full"
                  alt="Louvre"
                />
                {/* <a href="#!"> */}
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                {/* </a> */}
              </div>
            </div>

            <Link href={`/news/${data?.id}`} className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
              <h5 className="mb-3 text-lg font-bold">
                {data?.title}
              </h5>
              <p className="text-neutral-500 dark:text-neutral-300">
              {data?.content?.slice(0, 200)} . . .
              </p>
            </Link>
          </div>
                ))
              }
              </>
            )
          }
          </>
          
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </div>
  );
};

export default NewsSection;
