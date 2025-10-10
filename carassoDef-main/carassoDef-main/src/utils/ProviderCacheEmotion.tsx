'use client';

import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { emotionCache } from '@/utils/emotionCache';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      {children}
    </CacheProvider>
  );
}
