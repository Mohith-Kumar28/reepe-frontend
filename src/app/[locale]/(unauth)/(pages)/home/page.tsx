import { getTranslations } from 'next-intl/server';

import { PricingHome } from '@/components/reusable-components/pricing/PricingHome';

import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Team } from './components/Team';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Team />
      <PricingHome />
    </>
  );
}
