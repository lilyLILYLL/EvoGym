import { RootType, AppDispatch } from "../store";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
