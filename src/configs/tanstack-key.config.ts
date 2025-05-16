import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const TANSTACK_KEY = {
  USER_GET_ALL: "USER_GET_ALL",
  USER_GET_ONE: "USER_GET_ONE",
};
