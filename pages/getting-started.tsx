import styles from '@src/styles/getting-started.module.css';
import type { CurrentPageState, CurrentPageAction, PageElem } from 'custom-types';
import { useWindowDimensions, findCurrentPage, parseLink } from '@src/util/client';
import { Grid, GridItem, TextContent } from '@patternfly/react-core';
import { GettingStartedTopNav, GettingStartedSideNav } from '@src/components';
import { useReducer, useEffect } from 'react';
import { getMDFiles } from '@src/util/server';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

/**
 * Renders the {@link GettingStartedMainView}
 */
const GettingStarted: React.FC<InferGetStaticPropsType<GetStaticProps>> = ({
  mdFiles,
}: InferGetStaticPropsType<GetStaticProps>) => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  // Select the first element to display
  const [currentPageState, currentPageDispatch] = useReducer<
    React.Reducer<CurrentPageState, CurrentPageAction>
  >(currentPageReducer, {
    currentPage: {
      header: mdFiles[0].header,
      subHeader: mdFiles[0].files[0].subHeader,
      html: mdFiles[0].files[0].html,
    },
    mdFiles,
  });

  useEffect(() => {
    const { header, subHeader } = parseLink(router.asPath);

    currentPageDispatch({ payload: { header, subHeader } });
  }, [router.asPath]);

  return (
    <Grid>
      <GridItem span={12} lg={4} xl2={3}>
        {width! < 992 ? (
          <GettingStartedTopNav
            currentPageState={currentPageState}
            currentPageDispatch={currentPageDispatch}
          />
        ) : (
          <GettingStartedSideNav
            currentPageState={currentPageState}
            currentPageDispatch={currentPageDispatch}
          />
        )}
      </GridItem>
      <GridItem span={12} lg={8} xl2={9}>
        <TextContent>
          <article
            dangerouslySetInnerHTML={{ __html: currentPageState.currentPage.html }}
            className={styles.article}
          ></article>
        </TextContent>
      </GridItem>
    </Grid>
  );
};

const currentPageReducer = (
  state: CurrentPageState,
  action: CurrentPageAction,
): CurrentPageState => {
  const { currentPage, mdFiles } = state;
  const { payload } = action;

  const newCurrentPage: PageElem =
    findCurrentPage(payload.header, payload.subHeader, mdFiles) || currentPage;

  return { currentPage: newCurrentPage, mdFiles };
};

export const getStaticProps: GetStaticProps = async () => {
  const mdFiles = await getMDFiles('/webpage_info/getting-started');
  return {
    props: {
      mdFiles,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15,
  };
};

export default GettingStarted;
