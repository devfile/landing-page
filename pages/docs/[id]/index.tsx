import { getMDFiles } from '@src/util/server';
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';

interface Path {
  params: { id: string };
}

const APIPage: React.FC<InferGetStaticPropsType<GetStaticProps>> = ({
  docs
}: InferGetStaticPropsType<GetStaticProps>) => {
  // eslint-disable-next-line no-console
  console.log('Test');
  return (
    <div>
      <div>{JSON.stringify(docs)}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const mdFiles = await getMDFiles('/config/docs');

  const id = context.params?.id as string;
  const docs = mdFiles.find(({ header }) => header === id)!;

  return {
    props: { docs },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdFiles = await getMDFiles('/config/docs');

  const versions = mdFiles.map(({ header }) => header);

  const paths: Path[] = versions.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false
  };
};

export default APIPage;
