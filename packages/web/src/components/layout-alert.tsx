"use client";
import Image from "next/image";

import Alert from "@/components/alert";
import { useBlockSync } from "@/hooks/useBlockSync";
import { useIsDemoDao } from "@/hooks/useIsDemoDao";

export function LayoutAlert() {
  const isDemoDao = useIsDemoDao();
  const { status } = useBlockSync();
  if (isDemoDao) return null;
  return status !== "operational" ? (
    <Alert
      message={
        <span className="flex items-center gap-[10px] bg-danger p-[20px] rounded-[14px]">
          <Image
            src="/assets/image/alert.svg"
            alt="warning"
            width={24}
            height={24}
          />
          <span className="text-[16px] text-white">
            Warning: The indexer service is currently below 95%. Data displayed
            on this site may be outdated. Please wait until the indexer fully
            syncs for the latest information.
          </span>
        </span>
      }
    />
  ) : null;
} 