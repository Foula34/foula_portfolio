// Petit schéma d'architecture : une rangée de nœuds reliés par des flèches légendées.
// Rendu en HTML/CSS (pas d'image) pour rester net, lisible et accessible.

interface Node {
  label: string;
  note?: string;
  highlight?: boolean;
}

interface Link {
  label: string;
  // "both" : aller-retour ; "right" : de gauche à droite ; "left" : de droite à gauche.
  dir: 'both' | 'right' | 'left';
  dashed?: boolean;
}

export default function FlowDiagram({
  nodes,
  links,
  caption,
  accent = '#F88300',
}: {
  nodes: Node[];
  links: Link[];
  caption: string;
  // Couleur du nœud mis en avant : celle du projet raconté.
  accent?: string;
}) {
  return (
    <figure className="my-2">
      <div className="flex flex-col sm:flex-row sm:items-stretch gap-2 sm:gap-0">
        {nodes.map((node, i) => (
          <div key={node.label} className="contents">
            <div
              className={`sm:flex-1 sm:basis-0 min-w-0 rounded-xl border px-3 py-3 text-center ${
                node.highlight ? '' : 'border-border bg-bg'
              }`}
              style={
                node.highlight
                  ? { borderColor: accent, backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)` }
                  : undefined
              }
            >
              <p className="font-semibold text-text">{node.label}</p>
              {node.note && (
                <p className={`mt-0.5 text-sm ${node.highlight ? 'text-text' : 'text-text-muted'}`}>{node.note}</p>
              )}
            </div>
            {i < links.length && (
              <div className="sm:w-28 shrink-0 flex sm:flex-col items-center justify-center gap-1 px-2 py-1 text-text-muted">
                <span aria-hidden="true" className="text-lg leading-none rotate-90 sm:rotate-0">
                  {links[i].dir === 'both' ? '⇄' : links[i].dir === 'right' ? '→' : '←'}
                </span>
                <span
                  className={`text-xs text-center leading-tight ${links[i].dashed ? 'italic' : ''}`}
                >
                  {links[i].label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-sm text-text-muted">{caption}</figcaption>
    </figure>
  );
}
