"use client";

import { DaoHeader } from "../components/dao-header";
import { Overview } from "../components/overview";
import { Proposals } from "../components/proposals";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[30px]">
      <DaoHeader />
      <Overview />
      <Proposals />
    </div>
  );
} 