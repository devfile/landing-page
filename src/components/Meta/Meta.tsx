import Head from 'next/head';
import type { DefaultProps } from 'custom-types';

export interface MetaProps extends DefaultProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const basePath = process.env.DEVFILE_VIEWER_ROOT ? process.env.DEVFILE_VIEWER_ROOT : '';

/**
 * Renders a {@link Meta} React component.
 * Can change specific meta values in any pages
 * @returns `<Meta title={title} keywords={keywords} description={description}/>`
 */
export const Meta: React.FC<MetaProps> = (props: MetaProps): React.ReactElement => {
  const { title, keywords, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <meta name="theme-color" content="#151515" />

      <link rel="icon" href={`${basePath}/images/icons/favicon.ico`} />
      <link rel="manifest" href={`${basePath}/manifest.json`} />
    </Head>
  );
};
Meta.displayName = 'Meta';

Meta.defaultProps = {
  title: 'Devfile',
  keywords: 'Devfile, OpenShift, Kubernetes',
  description: 'Devfile Landing Page',
};
