import axiosClient from './axiosClient';

const productApi = {
  getAll(parames) {
    const url = '/product';
    return axiosClient.get(url, { params: parames });
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/product';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/product/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
};
export default productApi;
