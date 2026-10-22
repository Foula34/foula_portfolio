import HomePage from '@/components/HomePage';
import { homeMetadata } from '@/lib/routes';

export const metadata = homeMetadata('fr');

export default function Page() {
  return <HomePage locale="fr" />;
}
