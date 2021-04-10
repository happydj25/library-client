import {CATE_READ, CATE_INSERT, CATE_UPDATE, CATE_DELETE} from "./constants";

export const categoryRead = () => ({
    type: CATE_READ,
    request: {
        url: '/category/list', // 통신을 위한 추가적인 URL
        method: 'POST', // 통신 메소드 설정(서버 라우트에서 정한 방식으로 설정합니다.)
    },
});