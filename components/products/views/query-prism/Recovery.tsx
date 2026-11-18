import { Fragment } from 'react';
import { type V, list, txt } from '@/lib/products/dc';

/** QueryPrism page — recovery section. */
export function Recovery({ v }: { v: V }) {
  return (
    <section
      id="recovery"
      style={{ padding: 'clamp(88px,11vw,150px) clamp(20px,5vw,64px)', borderTop: '1px solid rgba(245,245,247,.06)' }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '40px 64px',
          alignItems: 'start',
        }}
      >
        <div data-reveal="1" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#64A8FF',
              }}
            >
              {'05 / Authority recovery'}
            </span>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: '999px',
                border: '1px solid rgba(64,200,224,.45)',
                fontSize: '11.5px',
                color: '#7FDCEC',
              }}
            >
              {'Coming soon'}
            </span>
          </div>
          <h2
            style={{
              margin: '0',
              fontSize: 'clamp(34px,4.2vw,56px)',
              lineHeight: '1.03',
              letterSpacing: '-0.03em',
              fontFamily: "'Montserrat',sans-serif",
              fontWeight: '500',
              textWrap: 'balance',
            }}
          >
            {'Recover pages that are slipping.'}
          </h2>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {
              'QueryPrism watches your pages for lost rankings and AI citations, shows the new questions they no longer answer, and turns the fixes into a refresh brief.'
            }
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '14px', fontSize: '15px' }}>
              <span
                style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: '#64A8FF', paddingTop: '3px' }}
              >
                {'01'}
              </span>
              {'Diagnosis — what changed since the last check'}
            </div>
            <div style={{ display: 'flex', gap: '14px', fontSize: '15px' }}>
              <span
                style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: '#64A8FF', paddingTop: '3px' }}
              >
                {'02'}
              </span>
              {'New questions the page doesn’t answer'}
            </div>
            <div style={{ display: 'flex', gap: '14px', fontSize: '15px' }}>
              <span
                style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: '#64A8FF', paddingTop: '3px' }}
              >
                {'03'}
              </span>
              {'Fix list → refresh brief'}
            </div>
          </div>
        </div>
        <div
          data-reveal="1"
          style={{
            padding: 'clamp(18px,2.4vw,26px)',
            borderRadius: '24px',
            background: '#1C1C1E',
            border: '1px solid rgba(100,168,255,.16)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '10px',
              letterSpacing: '.1em',
              color: '#98989D',
              padding: '0 4px 6px',
            }}
          >
            <span>{'PAGE · SIGNAL'}</span>
            <span>{'FIX'}</span>
          </div>
          {list(v.authRows).map((r, i1) => (
            <Fragment key={i1}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '13px 14px',
                  borderRadius: '12px',
                  background: 'rgba(0,0,0,.6)',
                  border: '1px solid rgba(245,245,247,.06)',
                }}
              >
                <span style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: '0' }}>
                  <span style={{ fontSize: '14px' }}>{txt(r?.p)}</span>
                  <span style={{ fontSize: '12px', color: '#FF6961' }}>{txt(r?.drop)}</span>
                </span>
                <span style={{ fontSize: '12.5px', color: '#A9CCFF', textAlign: 'right', maxWidth: '46%' }}>
                  {txt(r?.fix)}
                </span>
              </div>
            </Fragment>
          ))}
          <span style={{ fontSize: '12px', color: '#98989D', padding: '6px 4px 0' }}>
            {'Sample signals. Connect Search Console to use your real data.'}
          </span>
        </div>
      </div>
    </section>
  );
}
