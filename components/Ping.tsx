/*
 * @Date: 2025-04-03 11:01:25
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-03 11:09:05
 */
import React from "react";

const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-1">
        <span className="flex size-[11px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-75"></span>
          <span className="relative inline-flex size-[11px] rounded-full bg-[var(--color-primary)]"></span>
        </span>
      </div>
    </div>
  );
};

export default Ping;
