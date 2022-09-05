import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPosts} from '../api/getPosts';
import {Post} from '../api/types';

// 1번째 파라미터 : '슬라이스이름/함수이름'
// 2번째 파라미터 : 요청하고 싶은 함수
export const fetchPosts = createAsyncThunk('posts/fetchUsers', getPosts);

export interface PostsState {
  posts: {
    loading: boolean;
    data: Post[] | null;
    error: Error | null;
  };
}

const initialState: PostsState = {
  //로딩, 결과, 오류 상태를 다룸
  posts: {
    loading: false,
    data: null,
    error: null,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: state => {
      //요청이 시작했을 때 loading을 false로 설정하고 나머지 값들은 null로 설정
      state.posts = {
        loading: true,
        data: null,
        error: null,
      };
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
      //요청이 성공했을 때, loading을 false로 변경, data값을 설정
      state.posts.data = action.payload;
      state.posts.loading = false;
    },
    [fetchPosts.rejected.type]: (
      state,
      action: ReturnType<typeof fetchPosts.rejected>,
    ) => {
      //요청이 실패했을 때,  loading을 false로 하고 error 값을 설정
      state.posts.error = action.error;
      state.posts.loading = false;
    },
  },
});

export default postsSlice.reducer;
