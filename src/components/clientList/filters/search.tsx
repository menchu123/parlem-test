import { ChangeEvent, useState } from "react";
import useClientsContext from "../../../hooks/useClientsContext/useClientsContext";
import { Input } from "./search.style";

const Search = () => {
  const { setSearchTerm } = useClientsContext();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <Input
      type="text"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Buscar..."
    />
  );
};

export default Search;
