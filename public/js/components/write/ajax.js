// 网络请求
import axios from 'axios';
const categoryListApi = (category) => {
    const api = '/categoryList.action';
    return axios.get(api).then((res) => {
        return res['data'];
    });
};
const submitBlogApi = data => {
    const api = '/blog.action';
    return axios.post(api, data)
        .then((res) => {
            if (res['status'] === -1) {
                return {
                    error: true,
                    msg: res['data']
                }
            } else {
                return res['data']
            }
        });
};
export { submitBlogApi, categoryListApi };
