import { createGlobalState } from 'react-native-global-state-hooks';

export const useHaveNavigation = createGlobalState(true);
export const useRouterHistory = createGlobalState([]);
