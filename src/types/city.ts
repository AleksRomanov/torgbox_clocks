// type City = {
//   timezone: number,
//   name: string,
// }
//
// export type {City};

type City = {
  name: string,
  // timezone: number,
  location: {
    latitude: number,
    longitude: number,
  }
}

export type {City};
