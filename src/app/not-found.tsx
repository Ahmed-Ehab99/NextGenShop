import React from "react";

export default function NotFound() {
  return (
    <main className="mx-auto flex h-[32rem] max-w-7xl flex-col items-center justify-center space-y-5 px-5 py-10 text-center">
      <h1 className="text-3xl font-bold">Not Found</h1>
      <p className="capitalize">The Page You Are Looking For Does Not Exist.</p>
    </main>
  );
}
