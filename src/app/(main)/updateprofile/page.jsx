'use client'
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const UpdateFormPage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = async () => {

    if(!name.trim()){
      toast.error("Name required");
      return;
    }

    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      toast.error("Update failed user logged out");
      redirect("/login")
    }

    if (data) {
      toast.success("Profile updated successfully");
      redirect("/myprofile");
    }



  };

  return (
    <div className="mx-5 md:mx-30 lg:mx-65 shadow-sm h-[50vh] mt-10 pt-20 text-center">

      <div className="flex flex-col gap-10 items-center">

        <div className="w-1/3 flex flex-col gap-6">


          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-black p-2"
            type="text"
            placeholder="Type your name"
          />


          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border border-black p-2"
            type="text"
            placeholder="Type your image url"
          />


          <div className="flex justify-end gap-2">
            <button onClick={handleUpdate} className="btn btn-primary">
              Done
            </button>
            <button className="btn" onClick={()=>{redirect("/myprofile")}}>Cancel</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default UpdateFormPage;