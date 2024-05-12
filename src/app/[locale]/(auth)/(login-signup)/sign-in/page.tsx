import { getTranslations } from 'next-intl/server';

import { SignIn } from '@/components/reusable-components/auth/sign-in/sign-in';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInPage = () => <SignIn />;

export default SignInPage;
