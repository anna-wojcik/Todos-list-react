import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();
    return (new URLSearchParams(location.search)).get(searchQueryParamName);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);
        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};