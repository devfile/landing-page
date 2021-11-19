import '@patternfly/react-core/dist/styles/base.css';
import 'highlight.js/styles/stackoverflow-light.css';
import '@asciidoctor/core/dist/css/asciidoctor.css';
import '@src/styles/globals.css';
import type { NextPage } from 'next';
import type { GetConfig } from 'custom-types';
import { Layout } from '@src/components';
import { useAnalytics, getUserRegion } from '@src/util/client';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import getConfig from 'next/config';

/**
 * Renders the {@link MyApp}
 */
const MyApp: NextPage<AppProps> = (props: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps } = props;

  const router = useRouter();
  const analytics = useAnalytics();

  // Client renders page
  useEffect(() => {
    if (analytics) {
      const region = getUserRegion(router.locale);
      const { publicRuntimeConfig } = getConfig() as GetConfig;
      const anonymousId = analytics.user().anonymousId();

      analytics
        .identify(
          anonymousId,
          {
            id: anonymousId,
          },
          {
            context: { ip: '0.0.0.0', location: { country: region } },
          },
        )
        .catch(() => {});

      analytics
        .track(
          router.asPath,
          { client: publicRuntimeConfig.segmentClientId },
          {
            context: { ip: '0.0.0.0', location: { country: region } },
            userId: analytics.user().anonymousId(),
          },
        )
        .catch(() => {});
    }
  }, [analytics, router.asPath, router.locale]);

  return (
    <Layout>
      <Component {...pageProps} analytics={analytics} />
    </Layout>
  );
};

export default MyApp;
