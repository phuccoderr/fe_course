import http from "@/utils/http.util";

export const userApi = {
  login: (data: any) => {
    return http.post("/", data);
  },
};
