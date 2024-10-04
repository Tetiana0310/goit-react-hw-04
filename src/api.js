import axios from "axios"

const ACESS_KEY = "Ipp6GWlm8H_ntiYrF9QYLFI7wdHFz48wPUkVUkQjkiQ"

export const fetchImages = async (page = 0, query = "cat") => {
    const { data } = await axios.get ("https://api.unsplash.com/search/photos", {
    params: {
      client_id: ACESS_KEY,
      query: query,
      page: page,
      per_page: 10,
      orientation: "landscape",
    },
  });
  return data.response;
}
    
