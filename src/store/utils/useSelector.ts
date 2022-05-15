import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
