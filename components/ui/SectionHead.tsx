import { ui } from './styles';

/**
 * Eyebrow + H2 + lead paragraph used at the top of most sections.
 *  - `compact`: smaller H2 (two-column sections such as the FAQ).
 *  - `flush`: no bottom margin (when the head sits beside its content, not above it).
 */
export function SectionHead({
  eb,
  h,
  p,
  compact,
  flush,
}: {
  eb?: string;
  h?: string;
  p?: string;
  compact?: boolean;
  flush?: boolean;
}) {
  const { marginBottom, ...head } = ui.head;
  return (
    <div style={flush ? head : { ...head, marginBottom }}>
      <p style={ui.eyebrow}>{eb}</p>
      {h && <h2 style={compact ? ui.h2Compact : ui.h2}>{h}</h2>}
      {p && <p style={ui.lead}>{p}</p>}
    </div>
  );
}
