import React from 'react';
import { Search } from 'lucide-react';
import { SearchedProfessors } from './searchfilterdata.tsx'
import { Professor } from '../types';

interface SearchBarProps {
  onSearch: (query: string) => void;
  professors: {data: Professor[]};
}

export function SearchBar({ onSearch, professors }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  }
  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search for a professor or department..."
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={(e) => handleSearch(e.target.value)}
        value={searchTerm}
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      {searchTerm && <SearchedProfessors data= { professors.data } searchterm= { searchTerm }/>}
    </div>
  );
}