import type { GetConfig } from 'custom-types';
import getConfig from 'next/config';
import { Analytics, AnalyticsBrowser } from '@segment/analytics-next';
import { useEffect, useState } from 'react';

export const useAnalytics = (): Analytics | undefined => {
  const { publicRuntimeConfig } = getConfig() as GetConfig;

  const [analytics, setAnalytics] = useState<Analytics | undefined>();

  useEffect(() => {
    const loadAnalytics = async (): Promise<void> => {
      const [response] = await AnalyticsBrowser.load({
        writeKey: publicRuntimeConfig.analyticsWriteKey,
      });
      setAnalytics(response);
    };
    loadAnalytics().catch(() => {});
  }, [publicRuntimeConfig.analyticsWriteKey]);

  return analytics;
};
