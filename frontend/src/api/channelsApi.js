import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import prepareHeaders from './helpers';
import { API_CHANNELS, getApiRoute } from './apiPath';

export const channelsApi = createApi({
  reducerPath: 'channelsApi',
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: getApiRoute(API_CHANNELS),
      prepareHeaders,
    })(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      window.location.href = '/login';
    }

    return result;
  },
  tagTypes: ['Channels', 'Messages'],
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => '',
      providesTags: ['Channels'],
    }),

    addChannel: builder.mutation({
      query: (channel) => ({
        method: 'POST',
        body: channel,
      }),
    }),

    removeChannel: builder.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: id,
      }),
      invalidatesTags: ['Channels', 'Messages'],
    }),

    editChannel: builder.mutation({
      query: (channel) => ({
        method: 'PATCH',
        url: channel.id,
        body: channel,
      }),
    }),
  }),
});

export const {
  useGetChannelsQuery,
  useAddChannelMutation,
  useRemoveChannelMutation,
  useEditChannelMutation,
} = channelsApi;
