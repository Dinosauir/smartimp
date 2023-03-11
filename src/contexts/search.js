import { useContext, createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  return <SearchContext.Provider value={{ searchInput, setSearchInput }}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const { searchInput, setSearchInput } = useContext(SearchContext);

  return { searchInput, setSearchInput };
};
