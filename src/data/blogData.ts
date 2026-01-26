export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    tags: string[];
    readTime: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Les Secrets d\'une Interface Futuriste avec React',
        excerpt: 'Découvrez comment créer des interfaces utilisateur modernes et futuristes en utilisant React, Framer Motion et les dernières techniques CSS.',
        content: `
# Les Secrets d'une Interface Futuriste avec React

Dans cet article, nous allons explorer les techniques pour créer des interfaces utilisateur futuristes et engageantes.

## Glassmorphism

Le glassmorphism est une tendance de design qui utilise des arrière-plans translucides avec un effet de flou. Voici comment l'implémenter :

\`\`\`css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
\`\`\`

## Animations avec Framer Motion

Framer Motion permet de créer des animations fluides et performantes :

\`\`\`tsx
import { motion } from 'framer-motion';

function Component() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Contenu animé
    </motion.div>
  );
}
\`\`\`

## Effets Néon

Les effets néon ajoutent une touche futuriste :

\`\`\`css
.neon-glow {
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.6),
              0 0 40px rgba(0, 212, 255, 0.4);
}
\`\`\`

## Conclusion

En combinant ces techniques, vous pouvez créer des interfaces vraiment uniques et mémorables.
    `,
        date: '2026-01-20',
        author: 'Foula Fofana',
        tags: ['React', 'Design', 'CSS', 'Animation'],
        readTime: '5 min',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    },
    {
        id: '2',
        title: 'TypeScript: Les Bonnes Pratiques en 2026',
        excerpt: 'Un guide complet des meilleures pratiques TypeScript pour écrire du code maintenable et type-safe.',
        content: `
# TypeScript: Les Bonnes Pratiques en 2026

TypeScript est devenu incontournable dans le développement web moderne. Voici les pratiques essentielles.

## Types Stricts

Activez toujours le mode strict dans votre \`tsconfig.json\` :

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
\`\`\`

## Interfaces vs Types

Utilisez les interfaces pour les objets et les types pour les unions :

\`\`\`typescript
// Interface pour les objets
interface User {
  id: string;
  name: string;
  email: string;
}

// Type pour les unions
type Theme = 'light' | 'dark';
\`\`\`

## Generics

Les generics permettent de créer des composants réutilisables :

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("Hello");
\`\`\`

## Utility Types

TypeScript offre des types utilitaires puissants :

\`\`\`typescript
type Partial<T> // Rend toutes les propriétés optionnelles
type Required<T> // Rend toutes les propriétés requises
type Pick<T, K> // Sélectionne certaines propriétés
type Omit<T, K> // Exclut certaines propriétés
\`\`\`

## Conclusion

TypeScript améliore considérablement la qualité et la maintenabilité du code.
    `,
        date: '2026-01-18',
        author: 'Foula Fofana',
        tags: ['TypeScript', 'JavaScript', 'Best Practices'],
        readTime: '7 min',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    },
    {
        id: '3',
        title: 'Flutter: Créer des Apps Performantes',
        excerpt: 'Techniques et astuces pour optimiser les performances de vos applications Flutter et offrir une expérience utilisateur fluide.',
        content: `
# Flutter: Créer des Apps Performantes

La performance est cruciale pour une bonne expérience utilisateur. Voici comment optimiser vos apps Flutter.

## Widget Rebuild Optimization

Évitez les rebuilds inutiles avec \`const\` :

\`\`\`dart
class MyWidget extends StatelessWidget {
  const MyWidget({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return const Text('Optimized');
  }
}
\`\`\`

## State Management

Utilisez Provider ou Riverpod pour un state management efficace :

\`\`\`dart
final counterProvider = StateProvider<int>((ref) => 0);

class CounterWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);
    return Text('$count');
  }
}
\`\`\`

## ListView Builder

Pour les listes longues, utilisez ListView.builder :

\`\`\`dart
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ListTile(title: Text(items[index]));
  },
)
\`\`\`

## Image Optimization

Utilisez cached_network_image pour les images :

\`\`\`dart
CachedNetworkImage(
  imageUrl: url,
  placeholder: (context, url) => CircularProgressIndicator(),
  errorWidget: (context, url, error) => Icon(Icons.error),
)
\`\`\`

## Conclusion

Ces optimisations garantissent des apps Flutter rapides et réactives.
    `,
        date: '2026-01-15',
        author: 'Foula Fofana',
        tags: ['Flutter', 'Mobile', 'Performance', 'Dart'],
        readTime: '6 min',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
    },
    {
        id: '4',
        title: 'Next.js 15: Les Nouvelles Fonctionnalités',
        excerpt: 'Explorez les nouvelles fonctionnalités de Next.js 15 et comment elles peuvent améliorer vos applications web.',
        content: `
# Next.js 15: Les Nouvelles Fonctionnalités

Next.js 15 apporte son lot de nouveautés. Découvrons les plus importantes.

## Server Components

Les Server Components sont maintenant stables :

\`\`\`tsx
// app/page.tsx
async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{data.title}</div>;
}
\`\`\`

## App Router

Le nouveau App Router simplifie le routing :

\`\`\`
app/
  layout.tsx
  page.tsx
  blog/
    page.tsx
    [slug]/
      page.tsx
\`\`\`

## Server Actions

Les Server Actions permettent des mutations côté serveur :

\`\`\`tsx
'use server'

async function createPost(formData: FormData) {
  const title = formData.get('title');
  await db.posts.create({ title });
}
\`\`\`

## Streaming

Le streaming améliore les performances :

\`\`\`tsx
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SlowComponent />
    </Suspense>
  );
}
\`\`\`

## Conclusion

Next.js 15 rend le développement web encore plus efficace.
    `,
        date: '2026-01-12',
        author: 'Foula Fofana',
        tags: ['Next.js', 'React', 'Web Development'],
        readTime: '8 min',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    },
    {
        id: '5',
        title: 'Design System: Construire une Base Solide',
        excerpt: 'Comment créer et maintenir un design system cohérent pour vos projets web et mobile.',
        content: `
# Design System: Construire une Base Solide

Un design system bien conçu accélère le développement et assure la cohérence.

## Tokens de Design

Définissez vos tokens CSS :

\`\`\`css
:root {
  --color-primary: #00d4ff;
  --color-secondary: #b026ff;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --radius-sm: 0.5rem;
  --radius-md: 1rem;
}
\`\`\`

## Composants Réutilisables

Créez des composants atomiques :

\`\`\`tsx
// Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant, size, children }: ButtonProps) {
  return (
    <button className={\`btn btn-\${variant} btn-\${size}\`}>
      {children}
    </button>
  );
}
\`\`\`

## Documentation

Utilisez Storybook pour documenter :

\`\`\`tsx
export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button variant="primary">Click me</Button>;
\`\`\`

## Thème Dark/Light

Implémentez un système de thème :

\`\`\`tsx
const ThemeContext = createContext<'light' | 'dark'>('light');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

## Conclusion

Un bon design system est un investissement qui paie sur le long terme.
    `,
        date: '2026-01-10',
        author: 'Foula Fofana',
        tags: ['Design', 'UI/UX', 'CSS', 'React'],
        readTime: '6 min',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    },
    {
        id: '6',
        title: 'Supabase: Le Backend as a Service Moderne',
        excerpt: 'Découvrez comment Supabase peut accélérer votre développement avec une alternative open-source à Firebase.',
        content: `
# Supabase: Le Backend as a Service Moderne

Supabase est une alternative open-source à Firebase qui gagne en popularité.

## Configuration Initiale

Installation et setup :

\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

\`\`\`typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_KEY'
);
\`\`\`

## Authentication

Authentification simple et sécurisée :

\`\`\`typescript
// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123',
});

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123',
});
\`\`\`

## Database Queries

Requêtes SQL simplifiées :

\`\`\`typescript
// Select
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('author_id', userId);

// Insert
const { data, error } = await supabase
  .from('posts')
  .insert({ title: 'New Post', content: 'Content' });
\`\`\`

## Real-time Subscriptions

Écoutez les changements en temps réel :

\`\`\`typescript
const channel = supabase
  .channel('posts')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => console.log(payload)
  )
  .subscribe();
\`\`\`

## Storage

Gestion de fichiers :

\`\`\`typescript
const { data, error } = await supabase.storage
  .from('avatars')
  .upload('public/avatar.png', file);
\`\`\`

## Conclusion

Supabase offre une solution complète et moderne pour vos backends.
    `,
        date: '2026-01-08',
        author: 'Foula Fofana',
        tags: ['Supabase', 'Backend', 'Database', 'Authentication'],
        readTime: '7 min',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    },
];
