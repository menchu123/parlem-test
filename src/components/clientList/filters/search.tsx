import { ChangeEvent, useState } from "react";
import useClientsContext from "../../../hooks/useClientsContext/useClientsContext";

const Search = () => {
  const { setSearchTerm } = useClientsContext();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setSearchTerm(event.target.value);
  };
  return <input type="text" value={searchQuery} onChange={handleSearch} />;
};

export default Search;
