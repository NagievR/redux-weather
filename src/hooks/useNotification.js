import { useDispatch } from "react-redux";
import { showNotification } from "../store/actions/actionNotification";

const useNotification = () => {
  const dispatch = useDispatch();
  return ({ title, text, type, duration } = {}) => {
    dispatch(
      showNotification({ title, text, type, duration })
    )
  }
};

export default useNotification;
