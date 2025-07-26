"use client";
import { supabase } from "@/services/supabaseClient";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserContext = createContext();

function Provider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return;

    const { data: Users, error } = await supabase
      .from("Users")
      .select("*")
      .eq("email", user.email);

    if (Users?.length === 0) {
      const { data } = await supabase.from("Users").insert([
        {
          name: user.user_metadata?.name,
          email: user.email,
          picture: user.user_metadata?.picture,
        },
      ]).select(); // use .select() to return the inserted data

      setUser(data?.[0]);
    } else {
      setUser(Users[0]);
    }
  };

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

export default Provider;
export const useUser = () => useContext(UserContext);
