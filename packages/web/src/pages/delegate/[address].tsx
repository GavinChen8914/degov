"use client";
import { useRouter } from "next/router";

import { Profile } from "../../components/profile";

export default function Detail() {
  const router = useRouter();
  const { address } = router.query;

  return address ? (
    <Profile address={address as `0x${string}`} isDelegate />
  ) : null;
} 