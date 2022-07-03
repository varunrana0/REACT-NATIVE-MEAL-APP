import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [FavouriteIds, setFavouriteIds] = useState([]);

  function addFavourite(id) {
    setFavouriteIds((currentIds) => [...currentIds, id]);
  }
  function removeFavourite(id) {
    setFavouriteIds((currentIds) =>
      currentIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: FavouriteIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;
