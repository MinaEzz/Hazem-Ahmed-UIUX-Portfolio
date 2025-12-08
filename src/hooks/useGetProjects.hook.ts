"use client";
import { supabase } from "@/lib/supabaseClient";
import IProject from "@/types/projects.types";
import { useEffect, useState } from "react";

export function useGetProjects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProjects() {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.from("projects").select("*");

      if (error) {
        throw new Error(
          error.message || "Error occured while fetching projects"
        );
      }
      setProjects(data);

      console.log("projects", data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      console.log("unknown error occured");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, isLoading };
}
