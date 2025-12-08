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
        console.error(error);
        throw new Error(
          error.message || "Error occured while fetching projects"
        );
      }
      setProjects(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
        throw new Error(error.message);
      }
      console.error("unknown error occured");
      throw new Error("unknown error occured");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, isLoading };
}
