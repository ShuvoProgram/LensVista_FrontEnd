"use client";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { Button } from "../button";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/feature/cart/cart";
import { useToast } from "../use-toast";
import { Rating } from "@smastrom/react-rating";
import { useGetReviewQuery } from "@/redux/feature/review/reviewApi";


const ServiceCard = ({ service }: any) => {
  const {
    id,
    banner,
    title,
    createdAt,
    description,
    isBooked,
    price,
    category,
    availability,

  } = service;

  
  const { data: reviewData } = useGetReviewQuery(id);

  const review = reviewData?.data;

  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const totalReview = Array.isArray(review) ? review.length : 0;
  // Calculate the sum of ratings
  const sumOfRatings = Array.isArray(review)
      ? review.reduce((total: any, rv: any) => total + rv.rating, 0)
      : 0;

   // Calculate the average rating
   const averageRating = totalReview > 0 ? sumOfRatings / totalReview : 0;

  const handleAddToCart = (data: any) => {
    dispatch(addToCart(data));
    toast({
      title: "Service added to cart",
    });
  };

  return (
    <div>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src={banner}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                {moment(createdAt).format("MMM Do YY")}
              </time>
              <p className="text-xs mt-3 text-gray-500">
                {category}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-sm">
          
            <Rating value={averageRating} readOnly={true} style={{ maxWidth: 80 }}/>
              <span className="ml-1">( {totalReview} Reviews )</span>
            </div>
          </div>

          <Link href={`/services/${id}`}>
            <h3 className="mt-0.5 text-lg h-10 text-gray-900">
              {title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {description?.slice(0, 55)} . . .
          </p>

          <div className="flex items-center justify-between">
            {availability ? (
              <>
                <p className="font-medium text-lg">
                  ${price}
                </p>
                <Button
                  className="bg-blue-400 text-white"
                  variant={"default"}
                  onClick={() => handleAddToCart(service)}
                >
                  Add To Cart
                </Button>
              </>
            ) : (
              <>
                <span className="text-center text-red-500 font-semibold">
                  Not Available !
                </span>
              </>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ServiceCard;
