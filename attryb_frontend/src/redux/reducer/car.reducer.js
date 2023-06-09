import { GET_CAR_ERROR, GET_CAR_LOADING, GET_CAR_SUCCESS } from "../actiontypes/car.types";

  
  const initdata = {
    loading: false,
    error: false,
    cardetails: [],
  };
  
  const carReducerFun = (state = initdata, { type, payload }) => {
    switch (type) {
      case GET_CAR_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
  
      case GET_CAR_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          cardetails: payload,
        };
      }
  
      case GET_CAR_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
  
      default: {
        return state;
      }
    }
  };
  
  export default carReducerFun;
  