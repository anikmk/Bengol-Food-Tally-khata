import axios from "axios";

// Todo: upload image in imageBB
export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?&key=1ceac9070b93bf710db214cab95acba4`,
    formData
  );
  return data;
};
