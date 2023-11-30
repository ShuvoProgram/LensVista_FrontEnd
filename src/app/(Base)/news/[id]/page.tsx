"use client";

import React, { useEffect, useState } from 'react';
import moment from "moment";
import Image from 'next/image';

function NewsDetailPage({params}: any) {
    const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
    const { id } = params;

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
    
        const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_API}/news/${id}`;
    
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setNews(data.data); // Assuming the response has a 'data' property
            setIsLoading(false);
          })
          .catch((error) => {
            setIsError(true);
            setIsLoading(false);
            console.error("Error fetching data:", error);
          });
      }, [params, id]);

      const {
        title,
        banner,
        content,
        contentType,
    createdAt
      }: any = news;

  return (
    <main className="mt-10">
      <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: '24em' }}>
        <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(100deg, transparent, rgba(0, 0, 0, 0.7))' }}></div>
        <Image width={600} height={600} src={banner ? banner : "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"} className="absolute left-0 top-0 w-full h-full z-0 object-cover" alt="News" />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <a href="#" className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{contentType}</a>
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {title}
          </h2>
          <div className="flex mt-3">
            <img src="https://randomuser.me/api/portraits/men/97.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt="User" />
            <div>
            <p className="font-semibold text-white text-sm">Shuvo</p>
              <p className="font-semibold text-white text-sm">  {moment(createdAt).format("MMM Do YY")} </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p className="pb-6">{content}</p>
      </div>
    </main>
  );
}

export default NewsDetailPage;
