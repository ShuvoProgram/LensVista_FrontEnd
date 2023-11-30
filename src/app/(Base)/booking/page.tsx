"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  useAppDispatch,
  useAppSelector,
} from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCreateBookingMutation } from "@/redux/feature/booking/bookingApi";
import { ToastAction } from "@radix-ui/react-toast";
import Loader from "@/components/loader";
import OrderSuccess from "@/components/BookingSuccessMessage/BookingSuccessMessage";
import { removeFromCart } from "@/redux/feature/cart/cart";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";

const page = () => {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date()
  );
  const searchParams = useSearchParams();
  const productId: string | null =
    searchParams.get("productId");
  const [bookingItem, setBookingItem] = useState<any>(null);
  const { user } = useAppSelector((state) => state.auth);

  const [isSuccess, setIsSuccessTrue] = useState(false);
  const dispatch = useAppDispatch();

  const { toast } = useToast();

  const cartItems: any = useAppSelector(
    (state) => state.cart
  );

  const [createBooking, { isLoading }] =
    useCreateBookingMutation();

  useEffect(() => {
    if (productId) {
      const bookingService = cartItems?.find(
        (item: any) => item.id === parseInt(productId)
      );
      setBookingItem(bookingService);
    }
  }, [productId, cartItems]);

  const handleBookingSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const zipCode = form.zipCode.value;
    const address = form.address.value;

    const bookingData = {
      userId: parseInt(user?.id),
      serviceId: parseInt(productId as string),
      bookingInfo: {
        name,
        email,
        phone,
        address,
        date,
        zipCode,
      },
    };

    const response: any = await createBooking(bookingData);
    const { data: responseData, error } = response;

    if (responseData?.statusCode === 200) {
      setIsSuccessTrue(true);
      dispatch(removeFromCart(parseInt(productId!)));
      toast({
        title: responseData?.message,
      });
    } else {
      toast({
        variant: "destructive",
        duration: 2500,
        title: error?.data?.message,
        action: (
          <ToastAction
            altText="Try again"
            onClick={() => form.reset()}
          >
            Try again
          </ToastAction>
        ),
      });
    }
  };

  if (isSuccess) {
    return (
      <div>
        <OrderSuccess />
      </div>
    );
  }

  return (
    <div className="my-10">
      <div className="">
        <div className="relative mx-auto  mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-sky-300/40 py-32 text-center shadow-xl shadow-gray-300">
          <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">
            Book an Service
          </h1>
          <p className="mt-6 text-lg text-white">
            Get a Photo shoot with our experienced
            photographer
          </p>
          <img
            className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
            src="https://i0.wp.com/hdev.co.nz/wp-content/uploads/2014/10/wedding-395.jpg?ssl=1"
            alt=""
          />
        </div>

        <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
          <form onSubmit={handleBookingSubmit}>
            <div className="">
              <p className=" text-xl font-bold ">
                Provide Booking Information
              </p>
              <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g Jhon Doe"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="eg: fatickchare,chattogram,bangladesh"
                    />
                  </div>
                </div>
                <div className="relative">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="snap@example.com"
                  />
                </div>
                <div className="relative">
                  <Label htmlFor="zip">Zip code</Label>
                  <Input
                    type="number"
                    id="zip"
                    name="zipCode"
                    placeholder="e.g. 4035"
                  />
                </div>
                <div className="relative">
                  <Label htmlFor="phone">
                    Phone number
                  </Label>
                  <Input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="e.g. +88018365541"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <p className="mt-8  text-xl font-bold ">
                Select Booking date
              </p>
              <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 grid-cols-12">
                <div className="col-span-5">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <Button className="mt-8   bg-gradient-to-r from-[#13a0ef] to-[#97ce00]  px-3 py-3 text-sm font-bold text-white transition hover:translate-y-1">
                Book Now
              </Button>
            </div>
          </form>
        </div>
      </div>
      <script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js"></script>
    </div>
  );
};

export default page;
