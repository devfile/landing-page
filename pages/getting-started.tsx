import styles from '@src/styles/getting-started.module.css';
import type { MarkupFile, DefaultProps } from 'custom-types';
import type { NextPage } from 'next';
import { NavBar, Header } from '@src/components';
import { GetStaticProps } from 'next';
import { useHtml } from '@src/util/client';
import { getMarkupFiles } from '@src/util/server';

export interface GettingStartedProps extends DefaultProps {
  markupFiles: MarkupFile[];
}

const GettingStarted: NextPage<GettingStartedProps> = (props: GettingStartedProps) => {
  const { markupFiles } = props;

  const [htmlState, htmlDispatch] = useHtml(markupFiles);

  return (
    <>
      <Header navBar={{ markupFiles: htmlState.markupFiles, htmlDispatch }} />
      <div className={styles.container}>
        <NavBar markupFiles={htmlState.markupFiles} htmlDispatch={htmlDispatch} />
        <article
          className={styles.article}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: htmlState.html }}
        />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const markupFiles = await getMarkupFiles('/webpage_info/getting-started');

  return {
    props: {
      markupFiles,
    },
  };
};

export default GettingStarted;
