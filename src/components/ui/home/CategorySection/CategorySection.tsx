import React, { useEffect, useState } from "react";
import { categories as options } from "@/constants/categories";
import Link from "next/link";

const CategorySection = () => {
  // const [category, setCategory] = useState("")

  // useEffect(() => {
  //   const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_API}/service?`
  // }, [])
  return (
    <div className="mx-auto py-5 px-4 w-full max-w-md sm:max-w-2xl lg:max-w-7xl">
    <div className="grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-5 lg:grid-flow-col gap-5">

      {/* :TITLE */}
      <h2 className="sr-only">Categories preview</h2>

      

      {/* :CATEGORY 1 -> LARGEST, LEFT */}
      <div className="order-1 lg:row-span-2 col-span-2 relative shadow rounded-md overflow-hidden bg-pink-100 filter hover:shadow-lg hover:brightness-125">
        <Link href={`services`} className="pt-8 pb-20 px-5 block w-full h-full">
          {/* ::Background Picture */}
          <div>
            {/* :::picture */}
            <img src="https://i.ibb.co/6wLQn7X/camila-cordeiro-ha-Ry-BAih-S-0-unsplash.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            {/* :::overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
          </div>
          {/* ::Category Infos */}
          <div className="relative h-full flex flex-col items-start text-white top-56">
            {/* :::name */}
            <h3 className="text-3xl font-playfair tracking-wider leading-relaxed antialiased">
              <span className="block">Wedding Photography</span>
            </h3>
          </div>
        </Link>
      </div>



      {/* :CATEGORY 2 -> SMALL, CENTER LEFT */}
      <div className="order-2 lg:row-span-1 col-span-full sm:col-span-1 relative shadow rounded-md overflow-hidden bg-gray-800 filter hover:shadow-lg hover:brightness-125">
        <Link href={`services`} className="py-5 px-5 block w-full h-full">
          {/* ::Background Picture */}
          <div>
            {/* :::picture */}
            <img src="https://i.ibb.co/smRNMGg/joakim-honkasalo-BT9e-1ol-Ek-Y-unsplash.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            {/* :::overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
          </div>
          {/* ::Category Infos */}
          <div className="pt-10 relative h-full flex flex-col justify-end items-start text-white">
            {/* :::name */}
            <h3 className="text-2xl font-playfair tracking-wide leading-relaxed antialiased">Sports Photography</h3>
          </div>
        </Link>
      </div>

      {/* :CATEGORY 3 -> LARGE, CENTER BOTTOM*/}
      <div className="order-4 lg:order-3 lg:row-span-1 col-span-full sm:col-span-1 lg:col-span-2 relative shadow rounded-md overflow-hidden bg-pink-400 filter hover:shadow-lg hover:brightness-125">
        <Link href={`services`} className="py-5 px-5 block w-full h-full">
          {/* ::Background Picture */}
          <div>
            {/* :::picture */}
            <img src="https://i.ibb.co/yB9xQsZ/toa-heftiba-MSxw2vp-Qzx4-unsplash.jpg" alt="" className="absolute top-0 right-0 w-full lg:w-auto h-full object-cover lg:object-contain object-center" />
            {/* :::overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 lg:via-pink-300" />
          </div>
          {/* ::Category Infos */}
          <div className="relative h-full flex flex-col justify-between items-start text-white">
            {/* :::name */}
            <h3 className="mt-16 text-2xl font-playfair tracking-wide leading-relaxed antialiased">Food Photography</h3>
          </div>
        </Link>
      </div>



      {/* :CATEGORY 4 -> SMALL, CENTER RIGHT */}
      <div className="order-3 lg:order-4 lg:row-span-1 col-span-full sm:col-span-1 relative shadow rounded-md overflow-hidden bg-gray-500 filter hover:shadow-lg hover:brightness-125">
        <Link href={`services`} className="py-5 px-5 block w-full h-full">
          {/* ::Background Picture */}
          <div>
            {/* :::picture */}
            <img src="https://i.ibb.co/SNZxR2V/nathan-mullet-a-3-B8h-I5-Zk-unsplash.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            {/* :::overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-transparent opacity-70" />
          </div>
          {/* ::Category Infos */}
          <div className="relative h-full flex flex-col justify-between items-start space-y-16 text-white">
            {/* :::name */}
            <h3 className="text-2xl font-playfair tracking-wide leading-relaxed antialiased">Event Photography</h3>
          </div>
        </Link>
      </div>
      
      {/* :CATEGORY 5 -> TALL, RIGHT */}
      <div className="order-5 lg:row-span-2 col-span-full sm:col-span-1 relative shadow rounded-md overflow-hidden bg-blue-800 filter hover:shadow-lg hover:brightness-125">
        <Link href={`services`} className="py-5 px-5 block w-full h-full">
          {/* ::Background Picture */}
          <div>
            {/* :::picture */}
            <img src="https://i.ibb.co/25ZRXJm/bulbul-ahmed-tp9a-Bw9z-DE4-unsplash.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            {/* :::overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 opacity-50" />
          </div>
          {/* ::Category Infos */}
          <div className="relative h-full flex flex-col justify-between items-start space-y-10 text-white">
            {/* :::badge tag */}
            <span className="inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">Popular</span>
            {/* :::name */}
            <h3 className="text-3xl font-playfair tracking-wider leading-relaxed antialiased">
              <span className="block">Fashion</span>
              <span className="block">Photography</span>
            </h3>
          </div>
        </Link>
      </div>

    </div>
  </div>
  );
};

export default CategorySection;
