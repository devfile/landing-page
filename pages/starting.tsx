import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

import GettingStarted from '@components/starting/GettingStarted';

/**
 * Renders the {@link StartingPage}
 */
const StartingPage: React.FC<InferGetStaticPropsType<GetStaticProps>> = (
  props
) => (
  <div>
    <GettingStarted appDevfiles={props.appDevfiles} navProps={props} />
  </div>
);

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const appDevfiles = await (
    await fetch('http://localhost:3000/landing-page/starting_docs/appDevfiles')
  ).text();
  const appStarting = await (
    await fetch('http://localhost:3000/landing-page/starting_docs/appStarting')
  ).text();
  const techDevfiles = await (
    await fetch('http://localhost:3000/landing-page/starting_docs/techDevfiles')
  ).text();
  const techStarting = await (
    await fetch('http://localhost:3000/landing-page/starting_docs/techStarting')
  ).text();
  const enterpriseDevfiles = await (
    await fetch(
      'http://localhost:3000/landing-page/starting_docs/enterpriseDevfiles'
    )
  ).text();
  const enterpriseStarting = await (
    await fetch(
      'http://localhost:3000/landing-page/starting_docs/enterpriseStarting'
    )
  ).text();
  const registryDevfiles = await (
    await fetch(
      'http://localhost:3000/landing-page/starting_docs/registryDevfiles'
    )
  ).text();
  const registryStarting = await (
    await fetch(
      'http://localhost:3000/landing-page/starting_docs/registryStarting'
    )
  ).text();
  return {
    props: {
      appDevfiles,
      appStarting,
      techDevfiles,
      techStarting,
      enterpriseDevfiles,
      enterpriseStarting,
      registryDevfiles,
      registryStarting,
    },
  };
};

export default StartingPage;
