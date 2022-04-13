import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { bindActionCreators } from "redux";
import { AllActions, RootState } from "Redux/RootReducer";

export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllActions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
