import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CitiesList} from '../../constants';
import {City} from '../../types/city';
// import {CityType} from '../../types/cityType';
// import {OfferType} from '../../types/offerType';
// import {getOffersByCity} from '../../utils/utils';

interface CounterState {
  currentCity: City,
  // offers: OfferType[],
  // pickedOffers: OfferType[],
  // favoritesOffers: OfferType[],
}

const initialState: CounterState = {
  // offers: [],
  // pickedOffers: [],
  currentCity: CitiesList[0],
  // favoritesOffers: [],
};

export const offersReducer = createSlice({
  name: 'offersReducer',
  initialState,
  reducers: {
    // loadOffers: (state, action: PayloadAction<City[]>) => {
    //   state.offers = action.payload;
    // },
    selectCity: (state, action: PayloadAction<City>) => {
      state.currentCity = action.payload;
      // CitiesList.forEach((city) => {
      //   action.payload.map((favoriteOffer) => favoriteOffer.city.name === city.name && state.favoritesOffers.push(favoriteOffer));
      // });
    },
    // pickOffers: (state) => {
    //   state.pickedOffers = state.offers.filter((offer) => state.currentCity && offer.city.name === state.currentCity.name);
    // },
    // setNearbyOffers: (state, action: PayloadAction<OfferType[]>) => {
    //   state.pickedOffers = action.payload;
    // },
    // setOfferFavoriteStatus: (state, action: PayloadAction<OfferType>) => {
    //   const currentOffer = state.offers.find((offer) => offer.id === action.payload.id);
    //   const currentPickedOffer = state.pickedOffers.find((offer) => offer.id === action.payload.id);
    //
    //   if (currentOffer) {
    //     currentOffer.isFavorite = action.payload.isFavorite;
    //   }
    //   if (currentPickedOffer) {
    //     currentPickedOffer.isFavorite = action.payload.isFavorite;
    //   }
    // },
    // pickFavoritesOffers: (state, action: PayloadAction<OfferType[]>) => {
    //   CitiesList.forEach((city) => {
    //     action.payload.map((favoriteOffer) => favoriteOffer.city.name === city.name && state.favoritesOffers.push(favoriteOffer));
    //   });
    // },
  },
});

// export const {pickFavoritesOffers, setOfferFavoriteStatus, selectCity, pickOffers, loadOffers, setNearbyOffers} = offersReducer.actions;
export const {selectCity} = offersReducer.actions;

export default offersReducer.reducer;
