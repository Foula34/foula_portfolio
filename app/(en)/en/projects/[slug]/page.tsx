import CasePage from '@/components/CasePage';
import { caseMetadata, caseStaticParams, toCaseSlug } from '@/lib/routes';

export const dynamicParams = false;
export const generateStaticParams = caseStaticParams;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return caseMetadata('en', toCaseSlug((await params).slug));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <CasePage locale="en" slug={toCaseSlug((await params).slug)} />;
}
