import type { NextPage, GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import {
  withSidebar,
  WithSidebarProps,
  getStaticProps as getStaticPropsOfSidebarContainer,
} from '@/containers/withSidebar';
import { Article } from '@/components/organisms/Article';
import { Profile } from '@/types/Profile';
import { fetchProfile } from '@/services/profile.service';

type PageProps = WithSidebarProps & {
  profile: Profile;
};

const ProfilePage: NextPage<PageProps> = ({ profile }) => {
  return (
    <div>
      <Head>
        <title>プロフィール</title>
      </Head>

      <Article articleData={profile} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const { props } = (await getStaticPropsOfSidebarContainer(context)) as {
    props: WithSidebarProps;
  };
  const profile = await fetchProfile();

  return {
    props: {
      ...props,
      profile,
    },
  };
};

export default withSidebar(ProfilePage);
