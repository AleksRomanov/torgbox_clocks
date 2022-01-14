import {createApi} from '@reduxjs/toolkit/dist/query/react';
// import {OfferType} from '../types/offerType';
// import {ReviewType} from '../types/reviewType';
// import {APIRoute} from '../constants';
import createAPI from '../services/api';
import {City} from '../types/city';
// import {TimeZones} from '../constants';
// import { adaptDataFromServer } from '../utils/data-server-adapter';
// import {adaptDataFromServer} from '../utils/data-server-adapter';
// import {CitiesList} from '../constants';
// import { adaptDataFromServer } from '../utils/data-server-adapter';

// export type AuthTypeData = {
//   email: string;
//   password: string;
// }

// type commentSubmitData = {
//   ratingValue: number,
//   commentValue: string
// }

export const apiReducer = createApi({
  reducerPath: 'api',
  baseQuery: createAPI(),
  endpoints: (builder) => ({
    fetchTimeZones: builder.query<City[], void>({
      query: () => ({
        url: 'timezones.json',
        method: 'get',
      }),
      // transformResponse: (response: City) => adaptDataFromServer(response),
    }),
  }),
});

export const {useFetchTimeZonesQuery} = apiReducer;

