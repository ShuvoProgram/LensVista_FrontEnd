"use client";
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { useDeleteNewsMutation, useGetNewsQuery, useUpdateNewsMutation } from '@/redux/feature/news/newsApi';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem } from '@radix-ui/react-select';
import { Sheet, FileSignature, Trash2 } from 'lucide-react';
import { Input } from 'postcss';
import React, { useEffect, useState } from 'react'
import swal from "sweetalert";

function page() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState();
  const [newsData, setNewsData, ] = React.useState<any>(null);
  const { toast } = useToast();

    const [updatingData, setUpdatingData] = useState({
      newsId: newsData?.id,
      title: newsData?.title,
      content: newsData?.content,
      contentType: newsData?.contentType
    });

    
  const { data: news, isLoading } =
  useGetNewsQuery(currentPage);
const [updateNews] = useUpdateNewsMutation();
const [deleteNews] = useDeleteNewsMutation();

useEffect(() => {
  if (news) {
    setCurrentPage(news?.meta?.page);
    setTotalPage(news?.meta?.total);
  }
}, [news]);

const handleNext = () => {
  setCurrentPage((prev) => prev + 1);
};
const handlePrevious = () => {
  setCurrentPage((prev) => prev - 1);
};

const pageNumbers = [];
for (let i = 1; i <= totalPage!; i++) {
  pageNumbers.push(i);
}
if(isLoading) {
  return <h1>Loading...</h1>
}
const handleServiceUpdate = async () => {
  if (
    updatingData?.title === "" ||
    updatingData?.title === null ||
    updatingData?.title === undefined
  ) {
    toast({
      title: "Please add a title",
      variant: "destructive",
    });
    return;
  } else if (
    updatingData?.content === "" ||
    updatingData?.content === undefined ||
    updatingData?.content === null
  ) {
    toast({
      title: "Please add a content",
      variant: "destructive",
    });

    return;
  } else if (
    updatingData?.contentType === "" ||
    updatingData?.contentType === undefined ||
    updatingData?.contentType === null
  ) {
    toast({
      title: "Please add a contentType",
      variant: "destructive",
    });
    return;
  }

  const config = {
    id: updatingData?.newsId,
    data: {
      title: updatingData?.title,
      content: updatingData?.content,
      contentType: updatingData?.contentType,
    },
  };

  const response = await updateNews(config);
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
        <ToastAction altText="Try again">
          Try again
        </ToastAction>
      ),
    });
  }
};

const handleDelete = async (newsId: any) => {

  swal({
    title:
      "Are you sure you want to delete This Service ?",
    text: "Once deleted, you will not be able to recover this service",
    icon: "warning",
    buttons: ["Cancel", "Delete"], // Define buttons as an array,
    dangerMode: true,
  }).then(async (willDelete) => {
    if (willDelete) {
      const response = await deleteNews(newsId);
      const { data: responseData, error } = response;
      if (responseData?.statusCode === 200) {
        swal("News has been deleted !", {
          icon: "success",
        });
      } else {
        toast({
          variant: "destructive",
          duration: 2500,
          title: error?.data?.message,
        });
      }
    } else {
      swal("News is safe!");
    }
  });
};
console.log(news)
  return (
   <div>
      <div className="flex items-center justify-end my-2 space-y-2 text-xs sm:space-y-0 sm:space-x-3 ">
        <div className=" items-center justify-end space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
          <span className="block text-base">
            Page {currentPage} of {pageNumbers?.length}
          </span>
          <div className="space-x-1">
            <Button
              onClick={() => handlePrevious()}
              title="previous"
              type="button"
              className={`inline-flex  items-center justify-center w-8 h-8 py-0  rounded-md shadow ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentPage === 1}
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Button>
            <Button
              onClick={() => handleNext()}
              title="next"
              type="button"
              className={`inline-flex items-center  justify-center w-8 h-8 py-0  rounded-md shadow ${
                currentPage === pageNumbers?.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentPage === pageNumbers?.length}
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <Table>
        <TableCaption>A list of your News</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Title</TableHead>
            <TableHead>Content Type</TableHead>
            <TableHead>Content</TableHead>
            <TableHead className="text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news?.data?.map((e: any) => (
            <TableRow key={e?.id}>
              <TableCell className="font-medium">
                {e?.title}
              </TableCell>
              <TableCell>{e?.contentType}</TableCell>
              <TableCell>{e?.content}</TableCell>
             
              <TableCell className="text-right">
                <div className="space-x-3 flex items-center justify-end">
                  {/* <Sheet>
                    
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>
                          Update Service
                        </SheetTitle>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                         
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                        
                        </div>
                      </div>
                      <SheetFooter>
                     
                        <Button
                          type="submit"
                          onClick={handleServiceUpdate}
                        >
                          Save changes
                        </Button>
                   
                      </SheetFooter>
                    </SheetContent>
                  </Sheet> */}
                  <Button
                    onClick={() => handleDelete(e?.id)}
                    size={"sm"}
                    className="flex items-center justify-center bg-red-500 text-white"
                  >
                    <Trash2 size={15} />
                    <span className="ml-2">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default page