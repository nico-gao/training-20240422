import React from "react";
import { store } from ".";

const useMySelector = (selectorFn) => {
  const [selectedState, setSelectedState] = useState(
    selectorFn(store.getState())
  );

  useEffect(() => {
    store.subscribe(() => {
      setSelectedState(selectorFn(store.getState()));
    });
  }, []);

  return selectedState;
};

export default useMySelector;
