import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DataRequest, DataResponce } from '../models/data';

export const API_URL = process.env.REACT_APP_API_URL;

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (build) => ({
    editData: build.mutation<DataResponce, DataRequest>({ // TODO add skip(), to skip extra requests
      query: (body) => ({
        url: '/api/converter',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useEditDataMutation } = dataApi;