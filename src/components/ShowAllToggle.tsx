"use client";

import { useState, type ReactNode } from "react";

export function ShowAllToggle({
  initialCount,
  totalCount,
  label,
  children,
}: {
  initialCount: number;
  totalCount: number;
  label: string;
  children: ReactNode;
}) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className={showAll ? "" : "max-h-none"}>
        {children}
      </div>
      {totalCount > initialCount && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 text-sm font-medium text-[#005EB8] hover:underline"
        >
          {showAll ? `Show fewer` : `Show all ${totalCount} ${label}`}
        </button>
      )}
    </div>
  );
}
