"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
  } from "@/components/ui/select";
  import { Textarea } from "@/components/ui/textarea";
  import { Button } from "@/components/ui/button";
  import { useToast } from "@/components/ui/use-toast";
  import { ToastAction } from "@/components/ui/toast";
  import Loader from "../../../../components/loader";
import { useCreateNewsMutation } from "@/redux/feature/news/newsApi";
import { contentType } from "@/constants/categories";

function page() {
    const [image, setImage] = useState<any>([]);
    const [serviceData, setServiceData] = useState<any>({
        title: "",
        content: "",
        contentType: "",
      });

      const handleImageChange = (e: any) => {
        e.preventDefault();
        let files = Array.from(e.target.files);
        setImage((prevImages: any) => [
          ...prevImages,
          ...files,
        ]);
      };

      const { toast } = useToast();

      const [createNews, { isLoading }] = useCreateNewsMutation();

      const handleCreateNews = async (e: any) => {
        e.preventDefault();
    
        if (
          serviceData.title === "" ||
          serviceData.content === "" ||
          serviceData.contentType === ""
        ) {
          // Show a toast message for validation error
          toast({
            title: "Please fill in all fields",
            variant: "destructive",
          });
    
          return;
        }
    
        const Form = new FormData();
        image.forEach((image: any) => {
          Form.append("banner", image);
        });
        Form.append("title", serviceData.title);
        Form.append("price", serviceData.content);
        Form.append("category", serviceData.contentType);
    
        const response = await createNews(Form);
        const { data: responseData, error } = response;
        if (responseData?.statusCode === 200) {
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
              >
                Try again
              </ToastAction>
            ),
          });
        }
      };


  return (
    <div>
      <h2 className="text-center font-semibold text-xl">
        create service
      </h2>

      <div className=" mt-5">
        <form onSubmit={handleCreateNews}>
          <div className="grid grid-cols-12 gap-x-0 md:gap-x-5">
            <div className="col-span-12  space-y-2">
              <div className="grid grid-cols-12 gap-x-0 md:gap-x-5">
                <div className="col-span-12 md:col-span-4">
                  <Label className="text-base">
                    Title{" "}
                    <span className=" text-red-500">
                      {" "}
                      *
                    </span>
                  </Label>
                  <Input
                    value={serviceData?.title}
                    onChange={(e) =>
                      setServiceData((prev: any) => {
                        return {
                          ...prev,
                          title: e.target.value,
                        };
                      })
                    }
                    placeholder="Service Title"
                    type="text"
                    name="title"
                  />
                </div>
                
                <div className="col-span-12 md:col-span-4">
                  <Label className="text-base">
                    Banner{" "}
                    <span className=" text-red-500">
                      {" "}
                      *
                    </span>
                  </Label>
                  <Input
                    onChange={handleImageChange}
                    type="file"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-12 space-y-2 mt-4">
              <div className="grid grid-cols-12 gap-x-0 md:gap-x-5">
                <div className="col-span-12 md:col-span-4">
                  <Label className="text-base">
                    Content Type{" "}
                    <span className=" text-red-500">
                      {" "}
                      *
                    </span>
                  </Label>

                  <Select
                    value={serviceData?.contentType}
                    onValueChange={(e) =>
                      setServiceData((prev: any) => {
                        return {
                          ...prev,
                          contentType: e,
                        };
                      })
                    }
                  >
                    <SelectTrigger className="w-full">
                      Select ContentType
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel placeholder="Select Content Type" />
                        {contentType?.map((e) => (
                          <SelectItem
                            value={e}
                            key={e}
                          >
                            {e}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="col-span-12 w-full  space-y-2 mt-5">
              <Label className="text-base">
                Content{" "}
                <span className=" text-red-500"> *</span>
              </Label>
              <Textarea
                value={serviceData?.content}
                onChange={(e) =>
                  setServiceData((prev: any) => {
                    return {
                      ...prev,
                      content: e.target.value,
                    };
                  })
                }
                placeholder="News Content"
              />
            </div>

            <div className="col-span-12 mt-5 ">
              <div className="flex items-center justify-center">
                <Button
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? (
                    <>
                      <div className="flex items-center justify-center">
                        <Loader
                          size="30"
                          color="white"
                        />
                        <span className="ml-1">
                          Creating...
                        </span>
                      </div>
                    </>
                  ) : (
                    <>create</>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page