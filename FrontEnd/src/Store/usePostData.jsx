import { create } from "zustand";
const usePostData = create((set) => ({
    postData: [],
    setPostData: (data) => set({ postData: data }),
}))

export default usePostData;