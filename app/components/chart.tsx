import React from "react";

export default function Chart() {
  const data = [40, 70, 60, 90, 50];
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="flex items-end space-x-1 h-24">
        {data.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 bg-blue-500"
          />
        ))}
      </div>
    </div>
  );
}
