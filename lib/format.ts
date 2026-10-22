// Remplit un modèle de texte : fill('Chapitre {n} sur {total}', { n: 2, total: 8 }).
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
}
