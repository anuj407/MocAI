"use client";
import { supabase } from "@/services/supabaseClient";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function Provider({ children }) {
  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      // Check if user exists
      let { data : Users, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user?.email);

      // Create new user
      if (Users?.length === 0) {
        const { data, error } = await supabase.from("Users").insert([
          {
            name: user?.user_metadata?.name,
            email: user?.email,
            picture: user?.user_metadata?.picture,
          },
        ]);
        console.log("created data " + data);
      }
    });
  };
  return <div>{children}</div>;
}

export default Provider;
