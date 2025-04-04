/*
 * @Date: 2025-03-31 18:49:42
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-02 17:24:21
 */

import React from "react";
import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form flex justify-between items-center">
      <input name="query" defaultValue={query} className="search-input" placeholder="Search Startups" />
      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
