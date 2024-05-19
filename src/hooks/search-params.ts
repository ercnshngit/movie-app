import { useSearchParams } from "react-router-dom";

/**
 * A custom hook that returns all search parameters from the current URL as an object.
 * It can be used to with react-router submit function to update the search query.
 *
 * @returns {Object} An object containing all search parameters, where each key is a parameter name and each value is the corresponding parameter value.
 */
export function useAllSearchParams() {
  let [searchParams, _] = useSearchParams();
  let allParams = searchParams.entries();
  allParams = Array.from(allParams).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
  return {
    allParams,
  };
}
