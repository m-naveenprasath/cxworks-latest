import { Fragment } from 'react';
import { type V, list, txt } from '@/lib/products/dc';

/** Home page — about section. */
export function About({ v }: { v: V }) {
  return (
    <section
      id="about"
      style={{ padding: 'clamp(88px,11vw,150px) clamp(20px,5vw,64px)', borderTop: '1px solid rgba(245,245,247,.06)' }}
    >
      <div
        data-reveal="1"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '40px 80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '12px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#40C8E0',
            }}
          >
            {'04 / About'}
          </div>
          <h2
            style={{
              margin: '0',
              fontSize: 'clamp(36px,4.6vw,62px)',
              lineHeight: '1.03',
              letterSpacing: '-0.03em',
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: '500',
              textWrap: 'balance',
            }}
          >
            {'The products come from '}
            <span style={{ fontFamily: "'Forum',serif", fontWeight: '400', letterSpacing: '0' }}>
              {'the practice.'}
            </span>
          </h2>
          <div
            style={{
              marginTop: '20px',
              padding: 'clamp(20px,2.6vw,28px)',
              borderRadius: '24px',
              background: 'radial-gradient(80% 70% at 0% 0%, rgba(64,200,224,.1), transparent 60%), #1C1C1E',
              border: '1px solid rgba(64,200,224,.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <img
                src="/images/products/cxworks-logo.svg"
                alt="CXWorks"
                style={{ height: '18px', width: 'auto', display: 'block' }}
              />
              <span
                style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '10px',
                  letterSpacing: '.12em',
                  color: '#98989D',
                }}
              >
                {'PRACTICE → PRODUCT'}
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '10px', alignItems: 'center' }}>
              <div
                style={{
                  padding: '14px',
                  borderRadius: '14px',
                  background: 'rgba(0,0,0,.6)',
                  border: '1px solid rgba(245,245,247,.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '9.5px',
                    letterSpacing: '.1em',
                    color: '#98989D',
                  }}
                >
                  {'CLIENT WORK'}
                </span>
                <span style={{ fontSize: '14px', lineHeight: '1.35' }}>{'Commerce operations & growth'}</span>
              </div>
              <span style={{ color: '#40C8E0' }}>{'→'}</span>
              <div
                style={{
                  padding: '14px',
                  borderRadius: '14px',
                  background: 'rgba(64,200,224,.08)',
                  border: '1px solid rgba(64,200,224,.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <img
                  src="/images/products/nuark-logo.svg"
                  alt="NUARK"
                  style={{ height: '13px', width: 'auto', alignSelf: 'flex-start' }}
                />
                <span style={{ fontSize: '12.5px', color: '#C7C7CC' }}>{'40+ skills · 6 areas'}</span>
              </div>
              <div
                style={{
                  padding: '14px',
                  borderRadius: '14px',
                  background: 'rgba(0,0,0,.6)',
                  border: '1px solid rgba(245,245,247,.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    fontSize: '9.5px',
                    letterSpacing: '.1em',
                    color: '#98989D',
                  }}
                >
                  {'CLIENT WORK'}
                </span>
                <span style={{ fontSize: '14px', lineHeight: '1.35' }}>{'SEO & AI search visibility'}</span>
              </div>
              <span style={{ color: '#64A8FF' }}>{'→'}</span>
              <div
                style={{
                  padding: '14px',
                  borderRadius: '14px',
                  background: 'rgba(100,168,255,.08)',
                  border: '1px solid rgba(100,168,255,.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <img src="/images/products/queryprism-icon.svg" alt="" style={{ width: '16px', height: '16px' }} />
                  <span style={{ fontWeight: '700', fontSize: '13px' }}>{'QueryPrism'}</span>
                </span>
                <span style={{ fontSize: '12.5px', color: '#C7C7CC' }}>{'7 tools · one workflow'}</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
              <button
                onClick={v.goNuark}
                style={{
                  height: '40px',
                  padding: '0 16px',
                  borderRadius: '999px',
                  border: '1px solid rgba(64,200,224,.4)',
                  background: 'transparent',
                  color: '#F5F5F7',
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {'Explore NUARK →'}
              </button>
              <button
                onClick={v.goQP}
                style={{
                  height: '40px',
                  padding: '0 16px',
                  borderRadius: '999px',
                  border: '1px solid rgba(100,168,255,.4)',
                  background: 'transparent',
                  color: '#F5F5F7',
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {'Explore QueryPrism →'}
              </button>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <p
            style={{
              margin: '0',
              fontSize: 'clamp(17px,1.5vw,20px)',
              lineHeight: '1.6',
              color: '#F5F5F7',
              textWrap: 'pretty',
            }}
          >
            {
              'CXWorks helps digital and eCommerce teams improve customer experience and grow revenue. NUARK and QueryPrism take the work our teams do every day — diagnosing journeys, reading data, fixing catalogs, winning search — and turn it into software.'
            }
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {list(v.aboutRows).map((r, i1) => (
              <Fragment key={i1}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '150px 1fr',
                    gap: '20px',
                    padding: '16px 0',
                    borderTop: '1px solid rgba(245,245,247,.08)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat',sans-serif",
                      fontSize: '11.5px',
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      color: '#98989D',
                      paddingTop: '2px',
                    }}
                  >
                    {txt(r?.k)}
                  </span>
                  <span style={{ fontSize: '15.5px', lineHeight: '1.5' }}>{txt(r?.v)}</span>
                </div>
              </Fragment>
            ))}
          </div>
          <a
            href={v.cxworksUrl}
            rel="noopener"
            style={{
              alignSelf: 'flex-start',
              fontSize: '15px',
              display: 'flex',
              gap: '8px',
              whiteSpace: 'nowrap',
              borderBottom: '1px solid rgba(64,200,224,.4)',
              paddingBottom: '4px',
            }}
          >
            {'Visit cxworks.com '}
            <span>{'↗'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
