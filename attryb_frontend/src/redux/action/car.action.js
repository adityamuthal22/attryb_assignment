import {
  DeleteAPICALL,
  GetAPICALL,
  PostAPICALL,
} from "../../Config/Functions/getFun";
import { toast } from "react-toastify";
import {
  GET_CAR_ERROR,
  GET_CAR_LOADING,
  GET_CAR_SUCCESS,
} from "../actiontypes/car.types";

export const carADDAPI = (payload) => (dispatch) => {
  PostAPICALL(`cardetails`, payload)
    .then((r) => {
      toast.success("Car Details Added Successfully.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
      dispatch(carDetailsAPI());
    })
    .catch((err) => {
      console.log(err);
      toast.error("Car Details Not Added.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
    });
};

export const carDetailsAPI = () => (dispatch) => {
  dispatch({ type: GET_CAR_LOADING });
  GetAPICALL(`cardetails`)
    .then((r) => {
      dispatch({ type: GET_CAR_SUCCESS, payload: r });
    })
    .catch(() => {
      dispatch({ type: GET_CAR_ERROR });
    });
};

export const DelteCarApiByID = (id) => (dispatch) => {
  DeleteAPICALL(`cardetails/${id}`)
    .then((r) => {
      toast.success("CarDetails Deleted Successfully.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
      dispatch(carDetailsAPI());
    })
    .catch((err) => {
      console.log(err);
      toast.error("CarDetails Not Deleted.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
    });
};
