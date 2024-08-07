"use client";

import { NextPageContext } from "next";

interface ErrorProps {
  statusCode?: number;
}

export default function Error({ statusCode }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Error Page</p>
    </div>
  );
}

export function getErrorProps({ err, res }: NextPageContext) {
  const statusCode =
    res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return { props: { statusCode } };
}
