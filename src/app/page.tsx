"use client";
import WrapperBox from "@/components/WrapperBox/wrapperBox";
import HomePage from "./home/page";

import { CacheProvider } from "@emotion/react";
import { emotionCache } from "@/utils/emotionCache";

export default function Home() {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <WrapperBox>
          <HomePage />
        </WrapperBox>
      </CacheProvider>
    </>
  );
}
