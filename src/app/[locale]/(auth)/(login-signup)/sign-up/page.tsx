import { getTranslations } from 'next-intl/server';

import { SignUp } from '@/components/reusable-components/auth/sign-up/sign-up';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInPage = () => <SignUp />;

export default SignInPage;
