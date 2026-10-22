import CasePage from '@/components/CasePage';
import { caseMetadata, caseStaticParams, toCaseSlug } from '@/lib/routes';

export const dynamicParams = false;
export const generateStaticParams = caseStaticParams;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return caseMetadata('fr', toCaseSlug((await params).slug));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <CasePage locale="fr" slug={toCaseSlug((await params).slug)} />;
}
