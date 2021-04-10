import {CATE_READ, CATE_INSERT, CATE_UPDATE, CATE_DELETE} from "./constants";
import {success, error} from "redux-saga-requests";

// 초기화
const initialState = {
    lists: [],
};

// API 통신으로 돌아온 데이터를 처리하는 부분
export default (state = initialState, action) => {
    switch (action.type) {
        case success(CATE_READ): {
            return {
                ...state,
                lists: action.data.categoryList, // 돌아온 데이터(categoryList)를 lists라는 초기값에 넣음.
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}