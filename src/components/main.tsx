import React from 'react';
// import 'react-toastify/dist/ReactToastify.css';


function Main(): JSX.Element {
  // const dispatch = useAppDispatch();
  // const currentUrl = useLocation();
  // const pickedOffers = useAppSelector(((state) => state.offersReducer.pickedOffers));
  //
  // const {data: fetchedOffers, isSuccess: isSuccessFetchOffers} = useFetchOffersQuery(undefined, {refetchOnMountOrArgChange: true});
  //
  // useEffect(() => {
  //   if (isSuccessFetchOffers && fetchedOffers) {
  //     dispatch(loadOffers(fetchedOffers));
  //   }
  // }, [isSuccessFetchOffers, fetchedOffers, dispatch]);
  //
  // useEffect(() => {
  //   if (isSuccessFetchOffers) {
  //     dispatch(pickOffers());
  //   }
  // }, [currentUrl, dispatch, isSuccessFetchOffers, fetchedOffers]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities Clocks</h1>
      <section className="clocks container">
        {/*<ClocksDesk/>*/}
      </section>
      <div className="cities">
      </div>
    </main>
  );
}

export default Main;
