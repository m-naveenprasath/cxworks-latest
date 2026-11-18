/**
 * Animated "example" panel shown beside the hero on audit, service and solution pages.
 * Data lives in content/site/hero-visuals.json, keyed by page key (e.g. `audit:seo-audit`).
 * `k` picks the visual: flow, scan, gauge, answer, gates, path, stack, a11y, merch, cro, channels, wire.
 * Everything animates with CSS (keyframes in styles/globals.css), so this stays a server component.
 */
import type { CSSProperties, ReactNode } from 'react';
import heroVisuals from '@/content/site/hero-visuals.json';
import toolIcons from '@/content/site/tool-icons.json';
import { A } from '@/components/ui/A';

type Status = 'ok' | 'warn' | 'fail' | 'fix';
type Row = [label: string, status: Status | 'h', value: string];

export interface HeroVisualData {
  k: 'flow' | 'scan' | 'gauge' | 'answer' | 'gates' | 'path' | 'stack' | 'a11y' | 'merch' | 'cro' | 'channels' | 'wire';
  title: string;
  /** flow: [title, text, time] */
  steps?: [string, string, string][];
  /** scan, gauge, a11y, stack. Status `h` is a group heading. */
  rows?: Row[];
  /** gauge: the score. gates: `true` shows a scorecard (Fix first / Needs work / Healthy). */
  score?: number | boolean;
  scoreT?: string;
  /** gates: [name, before, after] */
  gates?: [string, number, number][];
  q?: string;
  ans?: string;
  /** answer: [name, 1 = you, 0 = other, -1 = you, not cited] */
  cites?: [string, number][];
  /** answer: [engine, 1 = cites you] */
  engines?: [string, number][];
  /** path: [stage, value, 1 = weak step] */
  stages?: [string, string, number?][];
  note?: string;
  /** stack: [name, icon slug, brand colour, status, value] */
  tools?: [string, string, string, Status, string][];
  /** stack: [event, count, bar width %] */
  events?: [string, string, number][];
  live?: string[];
  before?: string;
  after?: string;
  testL?: string;
  areasL?: string;
  flowL?: string;
  flow?: string[];
  /** merch: [title, status, text, icon path, status label] */
  areas?: [string, Status, string, string, string?][];
  /** cro: [step, text] */
  loop?: [string, string][];
  ab?: { a: string; b: string; lift: string; conf: number };
  methods?: string[];
  kpis?: [string, string][];
  /** channels: [name, share %, metric, colour] */
  ch?: [string, number, string, string][];
  /** [label, value] */
  chips?: [string, string][];
  /** Footnote and call-to-action shown below the panel. */
  foot?: string;
  cta?: { t: string; l: string; href: string };
}

const DATA = heroVisuals as unknown as Record<string, HeroVisualData>;
const ICONS = toolIcons as { paths: Record<string, string>; imgs?: Record<string, string> };

/** The hero visual for a page, or null when the page has none. */
export function heroVisual(key: string): HeroVisualData | null {
  return DATA[key] ?? null;
}

const MONT = "'Montserrat',sans-serif";
const RED = '#FF6961';
const ST: Record<Status, [string, string]> = {
  ok: ['var(--acc)', 'rgba(var(--acc-rgb),.14)'],
  warn: ['#FF9F0A', 'rgba(255,159,10,.14)'],
  fail: [RED, 'rgba(255,105,97,.14)'],
  fix: ['#30D158', 'rgba(48,209,88,.14)'],
};
/** Staggered animation delay: base + i × step seconds. */
const dl = (i: number, base: number, step: number) => (base + i * step).toFixed(2) + 's';
const pad2 = (i: number) => String(i + 1).padStart(2, '0');

const label: CSSProperties = {
  fontFamily: MONT,
  fontSize: '11px',
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
};
const tile: CSSProperties = {
  borderRadius: '14px',
  background: 'rgba(var(--ink-rgb),.035)',
  border: '1px solid rgba(var(--ink-rgb),.08)',
};
const nodeDot: CSSProperties = { background: '#0B0D0F', display: 'grid', placeItems: 'center', borderRadius: '50%' };

const ENGINE_ICONS: Record<string, string> = {
  ChatGPT:
    'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
  Claude:
    'm4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z',
  Gemini:
    'M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81',
  Perplexity:
    'M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z',
};

/** Fixed wireframe of a storefront (Website development). [grid-column, height, background] */
const WIRE: [string, string, string][] = [
  ['1 / -1', '14px', 'rgba(var(--ink-rgb),.10)'],
  ['1 / -1', '70px', 'linear-gradient(120deg, rgba(var(--acc-rgb),.35), rgba(40,90,180,.2))'],
  ['1 / 2', '22px', 'var(--acc)'],
  ['2 / -1', '22px', 'transparent'],
  ['auto', '64px', 'rgba(var(--ink-rgb),.08)'],
  ['auto', '64px', 'rgba(var(--ink-rgb),.08)'],
  ['auto', '64px', 'rgba(var(--ink-rgb),.08)'],
  ['1 / -1', '10px', 'rgba(var(--ink-rgb),.06)'],
];

/**
 * The panel plus its footnote / call-to-action / chips. These extras sit next to the panel as
 * their own cells of the hero grid (not inside the panel), matching the reference design.
 */
export function HeroVisual({ v }: { v: HeroVisualData }) {
  return (
    <>
      <div
        data-hv=""
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '540px',
          justifySelf: 'end',
          backdropFilter: 'blur(24px) saturate(160%)',
          WebkitBackdropFilter: 'blur(24px) saturate(160%)',
          background:
            'radial-gradient(60% 45% at 100% 0%, rgba(var(--acc-rgb),.12), transparent 70%), radial-gradient(50% 40% at 0% 100%, rgba(40,90,180,.10), transparent 70%), linear-gradient(150deg, rgba(var(--glass),.08), rgba(var(--glass),.02) 50%), rgba(10,12,14,.55)',
          border: '1px solid rgba(var(--glass),.16)',
          boxShadow: 'inset 0 1px 0 rgba(var(--glass),.18), 0 30px 60px -30px rgba(0,0,0,.8)',
          borderRadius: '24px',
          padding: 'clamp(18px,2.2vw,26px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          animation: 'cxFade 1.2s .2s cubic-bezier(.16,1,.3,1) both',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <span style={{ ...label, fontSize: '12px' }}>{v.title}</span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: MONT,
              fontSize: '12px',
              fontWeight: '500',
              color: 'var(--acc)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--acc)',
                animation: 'cxPulse 2.4s ease-in-out infinite',
              }}
            />
            Example
          </span>
        </div>
        {VISUALS[v.k]?.(v)}
      </div>
      {!!v.chips?.length && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {v.chips.map(([k, val], i) => (
            <span
              key={k}
              style={{
                display: 'inline-flex',
                alignItems: 'baseline',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '999px',
                background: 'rgba(var(--acc-rgb),.10)',
                border: '1px solid rgba(var(--acc-rgb),.35)',
                fontSize: '12px',
                color: 'var(--ink3)',
                animation: `cxFade .6s ${dl(i, 1.8, 0.15)} both`,
              }}
            >
              {k}
              <span style={{ fontFamily: MONT, fontWeight: '600', color: 'var(--acc)' }}>{val}</span>
            </span>
          ))}
        </div>
      )}
      {v.foot && (
        <div
          style={{
            fontSize: '13px',
            lineHeight: '1.5',
            color: 'var(--ink3)',
            paddingTop: '12px',
            borderTop: '1px solid rgba(var(--ink-rgb),.08)',
          }}
        >
          {v.foot}
        </div>
      )}
      {v.cta && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
            flexWrap: 'wrap',
            padding: '14px 16px',
            borderRadius: '16px',
            background: 'linear-gradient(120deg, rgba(var(--acc-rgb),.16), rgba(40,90,180,.10))',
            border: '1px solid rgba(var(--acc-rgb),.45)',
            animation: 'cxFade .8s 1s both',
          }}
        >
          <span
            style={{
              flex: '1 1 200px',
              fontFamily: MONT,
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '1.45',
              color: 'var(--ink)',
            }}
          >
            {v.cta.t}
          </span>
          <A
            className="hv-7760e51"
            href={v.cta.href}
            style={{
              flex: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              minHeight: '42px',
              padding: '0 18px',
              borderRadius: '999px',
              background: 'var(--acc)',
              color: 'var(--on-acc)',
              fontFamily: MONT,
              fontWeight: '600',
              fontSize: '14px',
              transition: 'background .3s, transform .3s',
            }}
          >
            {v.cta.l} <span aria-hidden="true">→</span>
          </A>
        </div>
      )}
    </>
  );
}

/* ---------------------------------------------------------------- shared pieces */

function Rows({ rows }: { rows: Row[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {rows.map(([l, s, val], i) => {
        const d = dl(i, 0.4, 0.1);
        if (s === 'h')
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '12px',
                padding: '8px 2px 2px',
                animation: `cxFade .7s ${d} both`,
              }}
            >
              <span
                style={{
                  fontFamily: MONT,
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: 'var(--acc)',
                }}
              >
                {l}
              </span>
              <span style={{ fontFamily: MONT, fontSize: '12px', color: 'var(--muted)' }}>{val}</span>
            </div>
          );
        const [c, bg] = ST[s];
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 14px',
              borderRadius: '12px',
              background: 'rgba(var(--ink-rgb),.035)',
              border: '1px solid rgba(var(--ink-rgb),.06)',
              animation: `cxFade .7s ${d} both`,
            }}
          >
            <span style={{ flex: 'none', width: '8px', height: '8px', borderRadius: '50%', background: c }} />
            <span
              style={{
                flex: '1',
                minWidth: '0',
                fontSize: '14px',
                color: 'var(--ink)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {l}
            </span>
            <span
              style={{
                flex: 'none',
                fontFamily: MONT,
                fontSize: '12px',
                fontWeight: '600',
                padding: '3px 10px',
                borderRadius: '999px',
                color: c,
                background: bg,
              }}
            >
              {val}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** Search box that types the query, then a struck-through "before" and an "after" chip. */
function SearchTest({ q, before, after }: { q: string; before?: string; after?: string }) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          height: '46px',
          padding: '0 14px',
          borderRadius: '14px',
          background: 'rgba(var(--ink-rgb),.05)',
          border: '1px solid rgba(var(--acc-rgb),.45)',
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ flex: 'none', color: 'var(--acc)' }}
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M16 16l5 5" />
        </svg>
        <span
          style={{
            fontSize: '14.5px',
            color: 'var(--ink)',
            whiteSpace: 'nowrap',
            animation: 'cxType 1.6s .4s steps(18) both',
          }}
        >
          {q}
        </span>
        <span
          style={{
            width: '2px',
            height: '18px',
            marginLeft: '-8px',
            background: 'var(--acc)',
            animation: 'cxCaret 1s step-end infinite',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <span
          style={{
            padding: '4px 11px',
            borderRadius: '999px',
            fontSize: '12px',
            fontFamily: MONT,
            color: RED,
            background: 'rgba(255,105,97,.12)',
            textDecoration: 'line-through',
          }}
        >
          {before}
        </span>
        <span
          style={{
            padding: '4px 11px',
            borderRadius: '999px',
            fontSize: '12px',
            fontFamily: MONT,
            color: 'var(--acc)',
            background: 'rgba(var(--acc-rgb),.14)',
            animation: 'cxFade .6s 2s both',
          }}
        >
          {after}
        </span>
      </div>
    </>
  );
}

/* ---------------------------------------------------------------- the visuals */

const VISUALS: Record<HeroVisualData['k'], (v: HeroVisualData) => ReactNode> = {
  /** Numbered steps on a vertical line. */
  flow: (v) => (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <span
        style={{
          position: 'absolute',
          left: '13px',
          top: '26px',
          bottom: '26px',
          width: '1px',
          background: 'linear-gradient(180deg, rgba(var(--acc-rgb),.6), rgba(var(--acc-rgb),.08))',
        }}
      />
      {(v.steps ?? []).map(([t, x, tm], i) => (
        <div
          key={t}
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '28px minmax(0,1fr) auto',
            gap: '14px',
            alignItems: 'start',
            padding: '11px 0',
            animation: `cxFade .8s ${dl(i, 0.3, 0.18)} both`,
          }}
        >
          <span
            style={{
              ...nodeDot,
              position: 'relative',
              width: '28px',
              height: '28px',
              border: '1px solid rgba(var(--acc-rgb),.55)',
              color: 'var(--acc)',
              fontFamily: MONT,
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            {pad2(i)}
            <span
              style={{
                position: 'absolute',
                inset: '-5px',
                borderRadius: '50%',
                border: '1px solid rgba(var(--acc-rgb),.6)',
                opacity: '0',
                animation: `cxPulse 4s ${1.6 + i}s ease-in-out infinite`,
              }}
            />
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
            <span style={{ fontFamily: MONT, fontSize: '15px', fontWeight: '500', color: 'var(--ink)' }}>{t}</span>
            <span style={{ fontSize: '13px', color: 'var(--ink3)', lineHeight: '1.45' }}>{x}</span>
          </span>
          <span
            style={{
              fontFamily: MONT,
              fontSize: '12px',
              color: 'var(--muted)',
              whiteSpace: 'nowrap',
              paddingTop: '5px',
            }}
          >
            {tm}
          </span>
        </div>
      ))}
    </div>
  ),

  /** Checklist with a scan line sweeping down it. */
  scan: (v) => (
    <div style={{ position: 'relative' }}>
      <span
        style={{
          position: 'absolute',
          left: '-10px',
          right: '-10px',
          height: '44px',
          top: '0',
          background: 'linear-gradient(180deg, transparent, rgba(var(--acc-rgb),.10))',
          borderBottom: '1px solid rgba(var(--acc-rgb),.5)',
          animation: 'cxScanY 5s 1s cubic-bezier(.45,0,.55,1) infinite',
          pointerEvents: 'none',
          zIndex: '1',
        }}
      />
      <Rows rows={v.rows ?? []} />
    </div>
  ),

  /** Score ring beside a checklist. */
  gauge: (v) => {
    const score = typeof v.score === 'number' ? v.score : 0;
    return (
      <div
        data-stackm=""
        style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: '20px', alignItems: 'center' }}
      >
        <div style={{ position: 'relative', width: '128px', height: '128px' }}>
          <svg viewBox="0 0 120 120" width="128" height="128" style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              strokeWidth="10"
              style={{ stroke: 'rgba(var(--ink-rgb),.08)' }}
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray="100"
              style={{
                stroke: score >= 75 ? 'var(--acc)' : '#FF9F0A',
                strokeDashoffset: 100 - score,
                animation: 'cxDash 1.8s .4s cubic-bezier(.16,1,.3,1) both',
              }}
            />
          </svg>
          <span
            style={{
              position: 'absolute',
              inset: '0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
            }}
          >
            <span
              style={{
                fontFamily: MONT,
                fontSize: '34px',
                fontWeight: '500',
                letterSpacing: '-0.03em',
                lineHeight: '1',
                color: 'var(--ink)',
              }}
            >
              {score}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{v.scoreT}</span>
          </span>
        </div>
        <Rows rows={v.rows ?? []} />
      </div>
    );
  },

  /** Live prompt test: engines, the question, an AI answer typed word by word and the sources it cites. */
  answer: (v) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: '6px' }}>
        {(v.engines ?? []).map(([n, on], i) => (
          <div
            key={n}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              padding: '9px 4px',
              borderRadius: '12px',
              backgroundColor: 'rgba(var(--ink-rgb),.035)',
              border: `1px solid ${on === 1 ? 'rgba(var(--acc-rgb),.45)' : 'rgba(var(--ink-rgb),.10)'}`,
              animation: `cxFade .6s ${dl(i, 0.2, 0.1)} both, cxEng 10s ${(i * 2.5).toFixed(1)}s ease-in-out infinite`,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'var(--ink)' }} aria-hidden="true">
              <path d={ENGINE_ICONS[n]} />
            </svg>
            <span style={{ fontFamily: MONT, fontSize: '11.5px', fontWeight: '500', color: 'var(--ink)' }}>{n}</span>
            <span style={{ fontSize: '10.5px', fontWeight: '600', color: on === 1 ? 'var(--acc)' : RED }}>
              {on === 1 ? 'Cited' : 'Not cited'}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span
          style={{
            flex: 'none',
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            background: 'var(--acc)',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <svg width="9" height="9" viewBox="0 0 10 10" style={{ fill: 'var(--on-acc)', marginLeft: '1px' }}>
            <path d="M2 1l7 4-7 4z" />
          </svg>
        </span>
        <span
          style={{
            flex: '1',
            height: '3px',
            borderRadius: '2px',
            background: 'rgba(var(--ink-rgb),.1)',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              display: 'block',
              height: '100%',
              background: 'var(--acc)',
              transformOrigin: 'left',
              animation: 'cxProg 10s linear infinite',
            }}
          />
        </span>
        <span style={{ fontFamily: MONT, fontSize: '11px', color: 'var(--muted)' }}>Live prompt test</span>
      </div>
      <div
        style={{
          alignSelf: 'flex-end',
          maxWidth: '88%',
          padding: '10px 14px',
          borderRadius: '16px 16px 4px 16px',
          background: 'rgba(var(--ink-rgb),.08)',
          fontSize: '14px',
          lineHeight: '1.45',
          color: 'var(--ink)',
          animation: 'cxLoopIn 10s .2s ease infinite both',
        }}
      >
        {v.q}
      </div>
      <div
        style={{
          padding: '14px 16px',
          borderRadius: '16px',
          background: 'rgba(var(--ink-rgb),.035)',
          border: '1px solid rgba(var(--ink-rgb),.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '9px',
          animation: 'cxFade .8s .7s both',
        }}
      >
        <span style={label}>AI answer</span>
        <p style={{ margin: '0', fontSize: '13.5px', lineHeight: '1.55', color: 'var(--ink2)' }}>
          {(v.ans ?? '').split(' ').map((w, i) => (
            <span key={i} style={{ animation: `cxLoopIn 10s ${(1.2 + i * 0.07).toFixed(2)}s ease infinite both` }}>
              {w + ' '}
            </span>
          ))}
        </p>
        <span style={{ ...label, paddingTop: '6px' }}>Sources cited</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {(v.cites ?? []).map(([n, who], i) => (
            <span
              key={n}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 11px',
                borderRadius: '999px',
                fontSize: '12px',
                fontFamily: MONT,
                fontWeight: '500',
                color: who === 1 ? 'var(--on-acc)' : who < 0 ? RED : 'var(--ink3)',
                background: who === 1 ? 'var(--acc)' : who < 0 ? 'rgba(255,105,97,.10)' : 'rgba(var(--ink-rgb),.05)',
                border: `1px solid ${who === 1 ? 'var(--acc)' : who < 0 ? 'rgba(255,105,97,.5)' : 'rgba(var(--ink-rgb),.12)'}`,
                animation: `cxLoopIn 10s ${dl(i, 3.6, 0.25)} ease infinite both`,
              }}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  ),

  /** Nine gate tiles with a score and bar each (scorecard, or before → after). */
  gates: (v) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '8px' }}>
      {(v.gates ?? []).map(([n, before, a], i) => {
        const card = v.score === true;
        const tone = a < 50 ? RED : a < 70 ? '#FF9F0A' : null;
        const c = card ? (tone ?? 'var(--acc)') : a >= 75 ? 'var(--acc)' : 'rgba(var(--acc-rgb),.7)';
        const sub = card ? (a < 50 ? 'Fix first' : a < 70 ? 'Needs work' : 'Healthy') : 'from ' + before;
        return (
          <div
            key={n}
            style={{
              ...tile,
              border: '1px solid rgba(var(--ink-rgb),.07)',
              padding: '11px 12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              minWidth: '0',
              animation: `cxFade .6s ${dl(i, 0.2, 0.07)} both`,
            }}
          >
            <span
              style={{
                fontSize: '12px',
                color: 'var(--ink3)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {n}
            </span>
            <span style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontFamily: MONT, fontSize: '21px', fontWeight: '500', lineHeight: '1', color: c }}>
                {a}
              </span>
              <span style={{ fontSize: '11px', color: card ? (tone ?? 'var(--muted)') : 'var(--muted)' }}>{sub}</span>
            </span>
            <span
              style={{ height: '4px', borderRadius: '2px', background: 'rgba(var(--ink-rgb),.08)', overflow: 'hidden' }}
            >
              <span
                style={{
                  display: 'block',
                  height: '100%',
                  width: a + '%',
                  background: c,
                  transformOrigin: 'left',
                  animation: `cxGrowX 1.2s ${dl(i, 0.6, 0.07)} cubic-bezier(.16,1,.3,1) both`,
                }}
              />
            </span>
          </div>
        );
      })}
    </div>
  ),

  /** Journey stages on a line with a travelling dot; the weak stage is red. */
  path: (v) => (
    <>
      <div style={{ position: 'relative', padding: '4px 0 2px' }}>
        <span
          style={{
            position: 'absolute',
            left: '14px',
            right: '14px',
            top: '18px',
            height: '2px',
            background: 'rgba(var(--ink-rgb),.1)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: '14px',
            right: '14px',
            top: '18px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--acc), rgba(var(--acc-rgb),.15))',
            transformOrigin: 'left',
            animation: 'cxGrowX 2s .3s cubic-bezier(.16,1,.3,1) both',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '13px',
            width: '12px',
            height: '12px',
            marginLeft: '-6px',
            borderRadius: '50%',
            background: 'var(--acc)',
            boxShadow: '0 0 0 6px rgba(var(--acc-rgb),.18)',
            animation: 'cxTravel 7s 2.2s ease-in-out infinite',
          }}
        />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: '4px' }}>
          {(v.stages ?? []).map(([t, val, weak], i) => {
            const c = weak ? RED : 'var(--acc)';
            return (
              <div
                key={t}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  width: '20%',
                  minWidth: '0',
                  textAlign: 'center',
                  animation: `cxFade .6s ${dl(i, 0.4, 0.15)} both`,
                }}
              >
                <span
                  style={{
                    ...nodeDot,
                    width: '28px',
                    height: '28px',
                    border: `1px solid ${weak ? 'rgba(255,105,97,.6)' : 'rgba(var(--acc-rgb),.5)'}`,
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />
                </span>
                <span style={{ fontFamily: MONT, fontSize: '12.5px', fontWeight: '500', color: 'var(--ink)' }}>
                  {t}
                </span>
                <span style={{ fontFamily: MONT, fontSize: '15px', fontWeight: '600', color: c }}>{val}</span>
              </div>
            );
          })}
        </div>
      </div>
      {v.note && (
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
            padding: '12px 14px',
            borderRadius: '14px',
            background: 'rgba(255,105,97,.08)',
            border: '1px solid rgba(255,105,97,.3)',
            fontSize: '13px',
            lineHeight: '1.5',
            color: 'var(--ink)',
            animation: 'cxFade .7s 1.6s both',
          }}
        >
          <span
            style={{
              flex: 'none',
              width: '7px',
              height: '7px',
              marginTop: '6px',
              borderRadius: '50%',
              background: RED,
            }}
          />
          {v.note}
        </div>
      )}
    </>
  ),

  /** Analytics: key-event bars with live events, a checklist and the supported tools. */
  stack: (v) => {
    const events = v.events ?? [];
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              padding: '16px 18px',
              borderRadius: '16px',
              background: 'linear-gradient(120deg, rgba(var(--acc-rgb),.12), rgba(40,90,180,.08))',
              border: '1px solid rgba(var(--acc-rgb),.4)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              animation: 'cxFade .8s .9s both',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <span style={{ ...label, fontSize: '12px' }}>Key events · last 7 days</span>
              <span
                style={{
                  position: 'relative',
                  height: '22px',
                  minWidth: '120px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                {(v.live ?? []).map((n, i) => (
                  <span
                    key={n}
                    style={{
                      position: 'absolute',
                      right: '0',
                      top: '0',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      height: '22px',
                      padding: '0 9px',
                      borderRadius: '999px',
                      background: 'rgba(var(--acc-rgb),.14)',
                      fontFamily: 'ui-monospace,Menlo,monospace',
                      fontSize: '11px',
                      color: 'var(--acc)',
                      opacity: '0',
                      animation: `cxEvt 6.4s ${(i * 1.6).toFixed(1)}s ease infinite`,
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--acc)' }} />
                    {n}
                  </span>
                ))}
              </span>
            </div>
            {events.map(([n, val, w], i) => (
              <div
                key={n}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '118px minmax(0,1fr) 44px',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontFamily: 'ui-monospace,Menlo,monospace', fontSize: '12px', color: 'var(--ink3)' }}>
                  {n}
                </span>
                <span
                  style={{
                    height: '10px',
                    borderRadius: '5px',
                    background: 'rgba(var(--ink-rgb),.06)',
                    overflow: 'hidden',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      height: '100%',
                      width: Math.max(6, w) + '%',
                      borderRadius: '5px',
                      background:
                        i === events.length - 1 ? 'var(--acc)' : `rgba(var(--acc-rgb),${(0.75 - i * 0.1).toFixed(2)})`,
                      transformOrigin: 'left',
                      animation: `cxGrowX 1.2s ${dl(i, 1, 0.15)} cubic-bezier(.16,1,.3,1) both`,
                    }}
                  />
                </span>
                <span
                  style={{
                    fontFamily: MONT,
                    fontSize: '12.5px',
                    fontWeight: '600',
                    color: 'var(--ink)',
                    textAlign: 'right',
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Rows rows={v.rows ?? []} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
            paddingTop: '12px',
            borderTop: '1px solid rgba(var(--ink-rgb),.08)',
          }}
        >
          <span style={label}>Supported platforms</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {(v.tools ?? []).map(([n, slug, color], i) => {
              const img = slug === 'qm' ? ICONS.imgs?.['Quantum Metric'] : undefined;
              return (
                <div
                  key={n}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '0',
                    border: '0',
                    minWidth: '0',
                    textAlign: 'center',
                    animation: `cxFade .6s ${dl(i, 0.2, 0.12)} both`,
                  }}
                >
                  <span
                    title={n}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '9px',
                      background: '#FFFFFF',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    {img ? (
                      <img src={img} alt="" style={{ width: '19px', height: '19px', objectFit: 'contain' }} />
                    ) : (
                      <svg width="17" height="17" viewBox="0 0 24 24" style={{ fill: color }} aria-hidden="true">
                        <path d={ICONS.paths[slug] ?? ''} />
                      </svg>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  },

  /** Accessibility: keyboard focus walking a form, a contrast fix and an alt-text fix, then the fix list. */
  a11y: (v) => {
    const field = (w: string) => (
      <span
        style={{
          height: '30px',
          borderRadius: '8px',
          background: 'rgba(var(--ink-rgb),.06)',
          border: '1px solid rgba(var(--ink-rgb),.1)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
        }}
      >
        <span style={{ height: '6px', width: w, borderRadius: '3px', background: 'rgba(var(--ink-rgb),.2)' }} />
      </span>
    );
    const aa = (color: string, extra?: CSSProperties) => (
      <span
        style={{
          flex: '1',
          height: '44px',
          borderRadius: '8px',
          background: '#FFFFFF',
          display: 'grid',
          placeItems: 'center',
          fontFamily: MONT,
          fontSize: '17px',
          fontWeight: '600',
          color,
          ...extra,
        }}
      >
        Aa
      </span>
    );
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '10px' }}>
          <div
            style={{
              ...tile,
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              animation: 'cxFade .7s .3s both',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={label}>Keyboard</span>
              <span
                style={{
                  padding: '2px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(var(--ink-rgb),.3)',
                  fontFamily: 'ui-monospace,Menlo,monospace',
                  fontSize: '11px',
                  color: 'var(--ink)',
                  animation: 'cxKey 6s linear infinite',
                }}
              >
                Tab ⇥
              </span>
            </div>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {field('46%')}
              {field('62%')}
              {field('38%')}
              <span
                style={{
                  height: '30px',
                  borderRadius: '8px',
                  background: 'rgba(var(--acc-rgb),.35)',
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: MONT,
                  fontSize: '11.5px',
                  fontWeight: '600',
                  color: 'var(--ink)',
                }}
              >
                Place order
              </span>
              <span
                style={{
                  position: 'absolute',
                  left: '-4px',
                  right: '-4px',
                  top: '-4px',
                  height: '38px',
                  borderRadius: '11px',
                  border: '2px solid var(--acc)',
                  boxShadow: '0 0 0 4px rgba(var(--acc-rgb),.16)',
                  animation: 'cxTab 6s cubic-bezier(.6,0,.2,1) infinite',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                ...tile,
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                animation: 'cxFade .7s .5s both',
              }}
            >
              <span style={label}>Contrast</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {aa('#A3A3A3')}
                {aa('#4A4A4A', { animation: 'cxFade .7s 1.4s both' })}
              </div>
              <div style={{ display: 'flex', gap: '6px', fontFamily: MONT, fontSize: '11px', fontWeight: '600' }}>
                <span style={{ flex: '1', textAlign: 'center', color: RED }}>2.5:1 ✕</span>
                <span
                  style={{ flex: '1', textAlign: 'center', color: 'var(--acc)', animation: 'cxFade .7s 1.4s both' }}
                >
                  8.9:1 ✓
                </span>
              </div>
            </div>
            <div
              style={{
                ...tile,
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                animation: 'cxFade .7s .7s both',
              }}
            >
              <span style={label}>Screen reader</span>
              <code style={{ fontSize: '11px', color: RED, textDecoration: 'line-through' }}>alt=&quot;&quot;</code>
              <code
                style={{
                  fontSize: '11px',
                  color: 'var(--acc)',
                  lineHeight: '1.4',
                  animation: 'cxFade .7s 1.8s both',
                }}
              >
                alt=&quot;18V drill, 2 batteries&quot;
              </code>
            </div>
          </div>
        </div>
        <Rows rows={v.rows ?? []} />
      </div>
    );
  },

  /** Merchandising / catalog: optional search test, optional data flow, then a grid of areas. */
  merch: (v) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {v.q && (
        <>
          <span style={label}>{v.testL || 'Live search test'}</span>
          <SearchTest q={v.q} before={v.before} after={v.after} />
        </>
      )}
      {!!v.flow?.length && (
        <>
          <span style={label}>{v.flowL}</span>
          <div style={{ position: 'relative', padding: '2px 0' }}>
            <span
              style={{
                position: 'absolute',
                left: '10%',
                right: '10%',
                top: '15px',
                height: '2px',
                background: 'rgba(var(--ink-rgb),.1)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: '10%',
                right: '10%',
                top: '15px',
                height: '2px',
                background: 'linear-gradient(90deg, var(--acc), rgba(var(--acc-rgb),.25))',
                transformOrigin: 'left',
                animation: 'cxGrowX 1.8s .3s cubic-bezier(.16,1,.3,1) both',
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: '10px',
                width: '12px',
                height: '12px',
                marginLeft: '-6px',
                borderRadius: '50%',
                background: 'var(--acc)',
                boxShadow: '0 0 0 5px rgba(var(--acc-rgb),.18)',
                animation: 'cxTravelC 6s 2s ease-in-out infinite',
              }}
            />
            <div
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
                gap: '4px',
              }}
            >
              {v.flow.map((t, i) => (
                <div
                  key={t}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '7px',
                    textAlign: 'center',
                    minWidth: '0',
                    animation: `cxFade .6s ${dl(i, 0.3, 0.12)} both`,
                  }}
                >
                  <span
                    style={{
                      ...nodeDot,
                      width: '30px',
                      height: '30px',
                      border: '1px solid rgba(var(--acc-rgb),.55)',
                      color: 'var(--acc)',
                      fontFamily: MONT,
                      fontSize: '11px',
                      fontWeight: '600',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontFamily: MONT,
                      fontSize: '11.5px',
                      fontWeight: '500',
                      lineHeight: '1.25',
                      color: 'var(--ink)',
                    }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <span style={{ ...label, paddingTop: '4px' }}>{v.areasL || 'Six areas we audit'}</span>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: '8px' }}>
        {(v.areas ?? []).map(([t, s, x, ic, sl], i) => {
          const [c, bg] = ST[s];
          return (
            <div
              key={t}
              className="hv-7f8fefb"
              style={{
                ...tile,
                padding: '11px 12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '7px',
                minWidth: '0',
                animation: `cxFade .6s ${dl(i, 0.9, 0.12)} both`,
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    flex: 'none',
                    width: '26px',
                    height: '26px',
                    borderRadius: '8px',
                    background: 'rgba(var(--acc-rgb),.14)',
                    color: 'var(--acc)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={ic} />
                  </svg>
                </span>
                <span
                  style={{
                    flex: '1',
                    minWidth: '0',
                    fontFamily: MONT,
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'var(--ink)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {t}
                </span>
              </span>
              <span style={{ fontSize: '12px', lineHeight: '1.4', color: 'var(--ink3)' }}>{x}</span>
              <span
                style={{
                  alignSelf: 'flex-start',
                  fontFamily: MONT,
                  fontSize: '10.5px',
                  fontWeight: '600',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  color: c,
                  background: bg,
                }}
              >
                {sl || (s === 'ok' ? 'Working' : s === 'fail' ? 'Fix first' : 'Needs work')}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  ),

  /** CRO: the five-step test loop, an example A/B test and the methods covered. */
  cro: (v) => {
    const ab = v.ab ?? { a: '', b: '', lift: '', conf: 0 };
    const abBox: CSSProperties = {
      padding: '10px 12px',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <span style={label}>The test loop</span>
        <div data-g5="" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,minmax(0,1fr))', gap: '6px' }}>
          {(v.loop ?? []).map(([t, x], i) => (
            <div
              key={t}
              style={{
                padding: '10px 6px',
                borderRadius: '12px',
                border: '1px solid rgba(var(--ink-rgb),.10)',
                backgroundColor: 'rgba(var(--ink-rgb),.035)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
                textAlign: 'center',
                minWidth: '0',
                animation: `cxFade .6s ${dl(i, 0.3, 0.12)} both, cxStep 10s ${i * 2}s ease-in-out infinite`,
              }}
            >
              <span
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'rgba(var(--acc-rgb),.16)',
                  color: 'var(--acc)',
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: MONT,
                  fontSize: '11px',
                  fontWeight: '600',
                }}
              >
                {i + 1}
              </span>
              <span
                style={{
                  fontFamily: MONT,
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'var(--ink)',
                  lineHeight: '1.2',
                }}
              >
                {t}
              </span>
              <span style={{ fontSize: '10.5px', lineHeight: '1.3', color: 'var(--muted)' }}>{x}</span>
            </div>
          ))}
        </div>
        <span style={{ ...label, paddingTop: '4px' }}>Example A/B test · checkout</span>
        <div
          style={{
            ...tile,
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            animation: 'cxFade .7s .9s both',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) auto',
              gap: '10px',
              alignItems: 'stretch',
            }}
          >
            <div style={{ ...abBox, border: '1px solid rgba(var(--ink-rgb),.12)' }}>
              <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>A · control</span>
              <span
                style={{ fontFamily: MONT, fontSize: '24px', fontWeight: '500', color: 'var(--ink3)', lineHeight: '1' }}
              >
                {ab.a}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>conversion</span>
            </div>
            <div
              style={{
                ...abBox,
                position: 'relative',
                border: '1px solid var(--acc)',
                background: 'rgba(var(--acc-rgb),.10)',
              }}
            >
              <span style={{ fontSize: '11.5px', color: 'var(--acc)' }}>B · variant</span>
              <span
                style={{ fontFamily: MONT, fontSize: '24px', fontWeight: '500', color: 'var(--ink)', lineHeight: '1' }}
              >
                {ab.b}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>conversion</span>
              <span
                style={{
                  position: 'absolute',
                  top: '-9px',
                  right: '8px',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  background: 'var(--acc)',
                  color: 'var(--on-acc)',
                  fontFamily: MONT,
                  fontSize: '10.5px',
                  fontWeight: '700',
                  animation: 'cxFade .6s 2.2s both',
                }}
              >
                Winner
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
                gap: '2px',
              }}
            >
              <span
                style={{
                  fontFamily: MONT,
                  fontSize: '28px',
                  fontWeight: '500',
                  letterSpacing: '-0.03em',
                  color: 'var(--acc)',
                  lineHeight: '1',
                }}
              >
                {ab.lift}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>lift</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--ink3)' }}>
              <span>Statistical significance</span>
              <span style={{ fontFamily: MONT, fontWeight: '600', color: 'var(--acc)' }}>{ab.conf}% confidence</span>
            </span>
            <span
              style={{
                position: 'relative',
                height: '8px',
                borderRadius: '4px',
                background: 'rgba(var(--ink-rgb),.08)',
                overflow: 'hidden',
              }}
            >
              <span
                style={{
                  display: 'block',
                  height: '100%',
                  width: ab.conf + '%',
                  borderRadius: '4px',
                  background: 'var(--acc)',
                  transformOrigin: 'left',
                  animation: 'cxGrowX 1.8s 1.2s cubic-bezier(.16,1,.3,1) both',
                }}
              />
            </span>
            <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Ship only above 95%</span>
          </div>
        </div>
        <span style={{ ...label, paddingTop: '4px' }}>What CRO covers</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {(v.methods ?? []).map((m, i) => (
            <span
              key={m}
              style={{
                padding: '5px 11px',
                borderRadius: '999px',
                background: 'rgba(var(--ink-rgb),.05)',
                border: '1px solid rgba(var(--ink-rgb),.12)',
                fontSize: '12px',
                color: 'var(--ink3)',
                whiteSpace: 'nowrap',
                animation: `cxFade .5s ${dl(i, 1.6, 0.08)} both`,
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    );
  },

  /** Growth: channel donut, channel list and three KPIs. */
  channels: (v) => {
    let cum = 0;
    const segs = (v.ch ?? []).map(([n, p, m, col], i) => {
      const s = { n, p, m, col, da: p - 0.8 + ' ' + (100 - p + 0.8), off: (-cum).toFixed(1), i };
      cum += p;
      return s;
    });
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div
          data-stackm=""
          style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: '18px', alignItems: 'center' }}
        >
          <div style={{ position: 'relative', width: '138px', height: '138px' }}>
            <svg viewBox="0 0 120 120" width="138" height="138" style={{ transform: 'rotate(-90deg)' }}>
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                strokeWidth="16"
                style={{ stroke: 'rgba(var(--ink-rgb),.06)' }}
              />
              {segs.map((sg) => (
                <circle
                  key={sg.n}
                  cx="60"
                  cy="60"
                  r="48"
                  fill="none"
                  strokeWidth="16"
                  pathLength={100}
                  strokeDasharray={sg.da}
                  strokeDashoffset={sg.off}
                  style={{
                    stroke: sg.col,
                    animation: `cxSeg 1.2s ${dl(sg.i, 0.3, 0.15)} cubic-bezier(.16,1,.3,1) both`,
                  }}
                />
              ))}
            </svg>
            <span
              style={{
                position: 'absolute',
                inset: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: MONT, fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>
                6 channels
              </span>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>share of sessions</span>
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {segs.map((sg) => (
              <div
                key={sg.n}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '10px minmax(0,1fr) 34px 66px',
                  gap: '8px',
                  alignItems: 'center',
                  fontSize: '12.5px',
                  animation: `cxFade .5s ${dl(sg.i, 0.6, 0.1)} both`,
                }}
              >
                <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: sg.col }} />
                <span
                  style={{ color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {sg.n}
                </span>
                <span style={{ fontFamily: MONT, fontWeight: '600', color: 'var(--ink)', textAlign: 'right' }}>
                  {sg.p}%
                </span>
                <span style={{ fontSize: '11.5px', color: 'var(--muted)', textAlign: 'right', whiteSpace: 'nowrap' }}>
                  {sg.m}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '8px' }}>
          {(v.kpis ?? []).map(([k, val], i) => (
            <div
              key={k}
              style={{
                padding: '12px',
                borderRadius: '14px',
                background: 'rgba(var(--acc-rgb),.08)',
                border: '1px solid rgba(var(--acc-rgb),.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                animation: `cxFade .6s ${dl(i, 1.4, 0.12)} both`,
              }}
            >
              <span
                style={{
                  fontFamily: MONT,
                  fontSize: '24px',
                  fontWeight: '500',
                  letterSpacing: '-0.03em',
                  lineHeight: '1',
                  color: 'var(--acc)',
                }}
              >
                {val}
              </span>
              <span style={{ fontSize: '11.5px', color: 'var(--ink3)' }}>{k}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },

  /** Website development: a browser window drawing a storefront wireframe. */
  wire: () => (
    <div
      style={{
        borderRadius: '14px',
        border: '1px solid rgba(var(--ink-rgb),.1)',
        overflow: 'hidden',
        background: 'rgba(0,0,0,.35)',
      }}
    >
      <div
        style={{
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '0 10px',
          borderBottom: '1px solid rgba(var(--ink-rgb),.08)',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgba(var(--ink-rgb),.2)' }}
          />
        ))}
        <span
          style={{
            marginLeft: '8px',
            flex: '1',
            height: '12px',
            borderRadius: '6px',
            background: 'rgba(var(--ink-rgb),.06)',
          }}
        />
      </div>
      <div style={{ padding: '14px', display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '10px' }}>
        {WIRE.map(([col, h, bg], i) => (
          <span
            key={i}
            style={{
              display: 'block',
              height: h,
              gridColumn: col,
              borderRadius: '8px',
              background: bg,
              animation: `cxFade .7s ${dl(i, 0.3, 0.15)} both`,
            }}
          />
        ))}
      </div>
    </div>
  ),
};
