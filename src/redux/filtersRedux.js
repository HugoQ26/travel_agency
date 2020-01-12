/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const ADD_REGION = createActionName('ADD_REGION');
export const REMOVE_REGION = createActionName('REMOVE_REGION');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeDuration = (durationType, durationValue) => ({ durationType, durationValue, type: CHANGE_DURATION });
export const addTag = (tag) => ({ tag, type: ADD_TAG });
export const removeTag = (tag) => ({ tag, type: REMOVE_TAG });
export const addRegion = (region) => ({region, type: ADD_REGION});
export const removeRegion = (region) => ({region, type: REMOVE_REGION});
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION: 
      if(action.durationType === 'to') {
        return {
          ...statePart, 
          duration: {
            ...statePart.duration,
            to: action.durationValue,
          },
        };
      }
      return {
        ...statePart, 
        duration: {
          ...statePart.duration,
          from: action.durationValue,
        },
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.tag],
      };
    case REMOVE_TAG:      
      return {
        ...statePart,
        tags: [...statePart.tags.filter(tag => tag !== action.tag)],
      };
    case ADD_REGION:
      return {
        ...statePart,
        regions: [...statePart.regions, action.region],
      };
    case REMOVE_REGION:      
      return {
        ...statePart,
        regions: [...statePart.regions.filter(region => region !== action.region)],
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
