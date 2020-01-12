/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters, regions}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  //filter by duration
 
  output = output.filter(trip => trip.days <= filters.duration.to && trip.days >= filters.duration.from);

  // filter by tags

  if(filters.tags.length) {
    output = output.filter(trip => {
      for (const tag of filters.tags) {
        if(trip.tags.includes(tag)) {
          return trip;
        }
      }
    });
  }

  // filter by regions

  if(filters.regions.length) {

    output = output.filter(trip => {      
      for (const regionTag of filters.regions) {
        if(regions[regionTag].countries.includes(trip.country.code)){
          return trip;
        }   
      }        
    });
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  let filtered = trips;

  filtered = filtered.filter(trip => trip.id === tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  let filtered = trips;

  filtered = filtered.filter(trip => trip.country.code === countryCode);  

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
