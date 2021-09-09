import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';

interface Path {
  params: { id: string };
}

const APIPage: React.FC<InferGetStaticPropsType<GetStaticProps>> = ({
  id
}: InferGetStaticPropsType<GetStaticProps>) => {
  // eslint-disable-next-line no-console
  console.log('Test');
  return (
    <div>
      <div>{id}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  return {
    props: { id },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const versions = ['2.0.0', '2.1.0', '2.2.0'];

  const paths: Path[] = versions.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false
  };
};

export default APIPage;
