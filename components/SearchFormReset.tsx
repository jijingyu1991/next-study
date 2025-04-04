/*
 * @Date: 2025-03-31 19:35:34
 * @LastEditors: guantingting
 * @LastEditTime: 2025-03-31 19:39:35
 */
"use client";

import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
};
export default SearchFormReset;
