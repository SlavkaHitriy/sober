import { useRouter } from 'expo-router';
import { useRouterHistory } from '@store/store';

export const useHistory = () => {
    const router = useRouter();
    const [routerHistory, setRouterHistory] = useRouterHistory();

    const goBack = (elseRoute = '/') => {
        if (routerHistory[routerHistory.length - 2]) {
            router.replace(routerHistory[routerHistory.length - 2]);
        } else {
            router.replace(elseRoute);
        }
    };

    const goBackReplace = (elseRoute = '/') => {
        if (routerHistory[routerHistory.length - 2]) {
            const route = routerHistory[routerHistory.length - 2];
            setRouterHistory((prevState) => prevState.slice(0, prevState.length - 2));

            router.replace(route);
        } else {
            router.replace(elseRoute);
        }
    };

    return {
        goBack,
        goBackReplace,
    };
};
