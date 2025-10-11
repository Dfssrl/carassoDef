"use client";

import Login from "./login/page";
import WrapperBox from "@/components/WrapperBox/wrapperBox";

import { CacheProvider } from "@emotion/react";
import { emotionCache } from "@/utils/emotionCache";

export default function Home() {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <WrapperBox>
          <Login />
        </WrapperBox>
      </CacheProvider>
    </>
  );
}
