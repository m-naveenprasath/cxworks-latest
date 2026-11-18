import { type V } from '@/lib/products/dc';

/** Site footer. */
export function Footer({ v }: { v: V }) {
  return (
    <footer style={{ padding: '56px clamp(20px,5vw,64px) 40px', borderTop: '1px solid rgba(245,245,247,.08)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', gridColumn: 'span 1' }}>
            <img
              src="/images/products/cxworks-logo.svg"
              alt="CXWorks"
              style={{ height: '22px', width: 'auto', display: 'block' }}
            />
            <span style={{ fontSize: '14px', lineHeight: '1.5', color: '#98989D', maxWidth: '260px' }}>
              {'Digital customer experience — practice and products.'}
            </span>
            <a
              className="ph-hover-ff3807"
              href={v.cxworksUrl}
              rel="noopener"
              style={{
                alignSelf: 'flex-start',
                marginTop: '6px',
                height: '44px',
                padding: '0 18px',
                borderRadius: '999px',
                background: '#40C8E0',
                color: '#000000',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              {'Visit cxworks.com ↗'}
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '11px',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#98989D',
              }}
            >
              {'Products'}
            </span>
            <button
              className="ph-hover-868718"
              onClick={v.goNuark}
              style={{
                textAlign: 'left',
                background: 'none',
                border: '0',
                padding: '0',
                color: '#F5F5F7',
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              {'NUARK'}
            </button>
            <button
              className="ph-hover-07aed6"
              onClick={v.goQP}
              style={{
                textAlign: 'left',
                background: 'none',
                border: '0',
                padding: '0',
                color: '#F5F5F7',
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              {'QueryPrism'}
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '11px',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#98989D',
              }}
            >
              {'Get started'}
            </span>
            <button
              className="ph-hover-868718"
              onClick={v.openWaitlist}
              style={{
                textAlign: 'left',
                background: 'none',
                border: '0',
                padding: '0',
                color: '#F5F5F7',
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              {'Join the NUARK waitlist'}
            </button>
            <button
              className="ph-hover-07aed6"
              onClick={v.openTrial}
              style={{
                textAlign: 'left',
                background: 'none',
                border: '0',
                padding: '0',
                color: '#F5F5F7',
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              {'Start a QueryPrism trial'}
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '11px',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#98989D',
              }}
            >
              {'Company'}
            </span>
            <button
              className="ph-hover-868718"
              onClick={v.goAbout}
              style={{
                textAlign: 'left',
                background: 'none',
                border: '0',
                padding: '0',
                color: '#F5F5F7',
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              {'About'}
            </button>
            <a href={v.contactUrl} style={{ color: '#F5F5F7', fontSize: '15px' }}>
              {'Contact'}
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '11px',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#98989D',
              }}
            >
              {'Support'}
            </span>
            <a
              className="ph-hover-868718"
              href="mailto:idris@cxworks.com"
              style={{ color: '#F5F5F7', fontSize: '15px' }}
            >
              {'idris@cxworks.com'}
            </a>
            <a
              className="ph-hover-868718"
              href="mailto:rithik@cxworks.com"
              style={{ color: '#F5F5F7', fontSize: '15px' }}
            >
              {'rithik@cxworks.com'}
            </a>
            <a
              className="ph-hover-868718"
              href="mailto:sowmya@cxworks.com"
              style={{ color: '#F5F5F7', fontSize: '15px' }}
            >
              {'sowmya@cxworks.com'}
            </a>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '13px',
            color: '#98989D',
          }}
        >
          <span>{'© 2026 CXWorks · products.cxworks.com · NUARK and QueryPrism are CXWorks products.'}</span>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11.5px' }}>
            {'Example data shown in product demos.'}
          </span>
        </div>
      </div>
    </footer>
  );
}
