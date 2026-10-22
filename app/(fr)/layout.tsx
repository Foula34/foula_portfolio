import '../globals.css';
import RootDocument from '@/components/RootDocument';

export { viewport } from '@/lib/metadata';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="fr">{children}</RootDocument>;
}
