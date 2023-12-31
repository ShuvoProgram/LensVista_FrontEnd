"use client";

import {
  useDeleteProfileDataMutation,
  useGetAllUserQuery,
  useMakeAdminMutation,
  useUpdateProfileMutation,
} from "@/redux/feature/user/userApi";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Trash2, UserCog2 } from "lucide-react";
import swal from "sweetalert";
import { useToast } from "@/components/ui/use-toast";

const page = () => {
  const { user, isLoading, token } = useAppSelector(
    (state) => state.auth
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState();

  const { toast } = useToast();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState<any>();
  const [address, setAddress] = useState();
  const { data } = useGetAllUserQuery(currentPage);
  const router = useRouter();
  React.useEffect(() => {
  
    if (data) {
      setCurrentPage(data?.meta?.page);
      setTotalPage(data?.meta?.total);
    }
  }, [user, isLoading, data]);

  const [makeAdmin] = useMakeAdminMutation();

  const [deleteUser] = useDeleteProfileDataMutation();
  const [updateData] = useUpdateProfileMutation();

  const handleDeleteUser = async (userId: string) => {
    const id = parseInt(userId);

    swal({
      title: "Are you sure you want to delete user ?",
      text: "Once deleted, you will not be able to recover this user",
      icon: "warning",
      buttons: ["Cancel", "Delete"], // Define buttons as an array,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const response = await deleteUser(id);
        const { data: responseData, error } = response;
        if (responseData?.statusCode === 200) {
          swal("User has been deleted !", {
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
        swal("User is safe!");
      }
    });
  };

  const handleUpdateUser = async (id: any) => {
    const data = {
      name,
      email,
      phone: phone?.toString(),
      location: address,
    };

    const config = {
      id: id,
      data,
    };

    const response = await updateData(config);
    const { data: responseData, error } = response;
    if (responseData?.statusCode === 200) {
      swal("User has been updated !", {
        icon: "success",
      });
    } else {
      toast({
        variant: "destructive",
        duration: 2500,
        title: error?.data?.message,
      });
    }
  };

  const handleMakeAdmin = async (email: string) => {
    const data = {
      email: email,
      role: {
        role: "admin",
      },
    };
    const response = await makeAdmin(data);
    const { data: responseData, error } = response;
    if (responseData?.statusCode === 200) {
      swal("User Role has  been updated !", {
        icon: "success",
      });
    } else {
      toast({
        variant: "destructive",
        duration: 2500,
        title: error?.data?.message,
      });
    }
  };

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
        <TableCaption>A list of Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">User Name</TableHead>
            {/* <TableHead>Price</TableHead> */}
            <TableHead>email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((e: any) => (
            <TableRow key={e?.id}>
              <TableCell className="font-medium">
                {e?.name}
              </TableCell>
              <TableCell>{e?.email}</TableCell>
              <TableCell>{e?.role}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end space-x-5">
                  {user?.role === "super_admin" && (
                    <>
                      {e?.role !== "admin" && (
                        <Button
                          onClick={() =>
                            handleMakeAdmin(e?.email)
                          }
                          size={"sm"}
                          className="text-xs bg-blue-400 text-white flex items-center justify-center"
                        >
                          {/* <Trash2 size={15} /> */}
                          <span className="ml-1">
                            Make Admin
                          </span>
                        </Button>
                      )}
                    </>
                  )}

                  <Sheet>
                    <SheetTrigger>
                      <Button
                        size={"sm"}
                        className="text-xs bg-yellow-400 text-white flex items-center justify-center"
                        onClick={() => {
                          setName(e?.name);
                          setEmail(e?.email);
                          setPhone(e?.phone);
                          setAddress(e?.location);
                        }}
                      >
                        <UserCog2 size={15} />
                        <span className="ml-1">Update</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>
                          Edit profile
                        </SheetTitle>
                        <SheetDescription>
                          Make changes to user profile .
                          Click save when you're done.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="name"
                            className="text-right"
                          >
                            Name
                          </Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e: any) =>
                              setName(e.target.value)
                            }
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="email"
                            className="text-right"
                          >
                            email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            readOnly
                            value={email}
                            onChange={(e: any) =>
                              setEmail(e.target.value)
                            }
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="phone"
                            className="text-right"
                          >
                            Phone
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            // readOnly
                            // defaultValue={e?.phone}
                            value={phone}
                            onChange={(e: any) =>
                              setPhone(e.target.value)
                            }
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="address"
                            className="text-right"
                          >
                            Address
                          </Label>
                          <Input
                            id="address"
                            name="address"
                            // readOnly
                            value={address}
                            onChange={(e: any) =>
                              setAddress(e.target.value)
                            }
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <SheetFooter>
                        {/* <SheetClose asChild> */}
                        <Button
                          onClick={() =>
                            handleUpdateUser(e?.id)
                          }
                        >
                          Save changes
                        </Button>
                        {/* </SheetClose> */}
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>

                  <Button
                    onClick={() => handleDeleteUser(e?.id)}
                    size={"sm"}
                    className="text-xs bg-red-500 text-white flex items-center justify-center"
                  >
                    <Trash2 size={15} />
                    <span className="ml-1">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
