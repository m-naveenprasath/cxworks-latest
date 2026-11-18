import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** QueryPrism page — trial section. */
export function Trial({ v }: { v: V }) {
  return (
    <section id="trial" style={{ padding: '0 clamp(20px,5vw,64px) clamp(88px,10vw,140px)' }}>
      <div
        data-reveal="1"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: 'clamp(28px,5vw,64px)',
          borderRadius: '32px',
          background: 'radial-gradient(70% 90% at 100% 100%, rgba(100,168,255,.2), transparent 60%), #1C1C1E',
          border: '1px solid rgba(100,168,255,.25)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: '40px 64px',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="/images/products/queryprism-icon.svg"
                alt=""
                style={{ width: '28px', height: '28px', display: 'block' }}
              />
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: '700',
                  fontSize: '19px',
                  letterSpacing: '-0.02em',
                }}
              >
                {'QueryPrism'}
              </span>
            </span>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '999px',
                border: '1px solid rgba(100,168,255,.35)',
                fontSize: '12px',
                color: '#A9CCFF',
              }}
            >
              {'Free trial'}
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
            {'Run your first fan-out today.'}
          </h2>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {"Three fields, then you're straight into the product. About a minute for your first run."}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
            <div style={{ display: 'flex', gap: '12px', fontSize: '15px' }}>
              <span style={{ color: '#64A8FF' }}>{'✓'}</span>
              {'Fan-out, coverage check and SERP analyser'}
            </div>
            <div style={{ display: 'flex', gap: '12px', fontSize: '15px' }}>
              <span style={{ color: '#64A8FF' }}>{'✓'}</span>
              {'Content briefs and content that gets cited'}
            </div>
            <div style={{ display: 'flex', gap: '12px', fontSize: '15px' }}>
              <span style={{ color: '#64A8FF' }}>{'✓'}</span>
              {'Query cluster map · Authority recovery coming soon'}
            </div>
          </div>
        </div>
        <div
          style={{
            padding: 'clamp(20px,3vw,32px)',
            borderRadius: '24px',
            background: '#2C2C2E',
            border: '1px solid rgba(245,245,247,.08)',
          }}
        >
          {v.qiShowForm ? (
            <form onSubmit={v.submitInlineQP} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {list(v.fields).map((f, i1) => (
                <Fragment key={i1}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <span style={{ fontSize: '13px', color: '#C7C7CC' }}>{txt(f?.label)}</span>
                    <input
                      className="ph-focus-0fad48"
                      type={f?.type}
                      name={f?.key}
                      autoComplete={f?.ac}
                      autoCapitalize={f?.cap}
                      spellCheck="false"
                      value={f?.value ?? ''}
                      onChange={f?.onChange}
                      placeholder={f?.placeholder}
                      style={css(
                        `height:50px; border-radius:12px; border:1px solid ${str(f?.border)}; background:rgba(245,245,247,.04); color:#F5F5F7; padding:0 16px; font-size:16px; font-family:inherit; outline:none; transition:box-shadow .2s, border-color .2s`,
                      )}
                    />
                    {f?.hasError ? <span style={{ fontSize: '12.5px', color: '#FF8A80' }}>{txt(f?.error)}</span> : null}
                  </label>
                </Fragment>
              ))}
              {v.qiError ? (
                <div
                  role="alert"
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    background: 'rgba(255,105,97,.08)',
                    border: '1px solid rgba(255,105,97,.35)',
                    fontSize: '14px',
                    color: '#FFD1CC',
                  }}
                >
                  {"We couldn't create your trial just now. Check your connection and try again."}
                </div>
              ) : null}
              <button
                className="ph-hover-0882f3"
                type="submit"
                style={{
                  height: '54px',
                  borderRadius: '999px',
                  border: '0',
                  background: '#64A8FF',
                  color: '#000000',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'transform .2s',
                }}
              >
                {v.qiLoading ? (
                  <>
                    <span
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: '2px solid rgba(0,0,0,.25)',
                        borderTopColor: '#000000',
                        animation: 'cxSpin .7s linear infinite',
                      }}
                    ></span>
                    {'Creating your trial…'}
                  </>
                ) : null}
                {v.qiNotLoading ? <>{'Start Free Trial'}</> : null}
              </button>
              <span style={{ fontSize: '12px', color: '#98989D', textAlign: 'center' }}>{'No card required.'}</span>
            </form>
          ) : null}{' '}
          {v.qiSuccess ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                animation: 'cxIn .45s ease',
                minHeight: '280px',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  border: '1px solid #64A8FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#64A8FF',
                  fontSize: '22px',
                }}
              >
                {'✓'}
              </span>
              <h3
                style={{
                  margin: '0',
                  fontSize: 'clamp(26px,3vw,32px)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '500',
                }}
              >
                {'Your trial is ready.'}
              </h3>
              <p style={{ margin: '0', fontSize: '15.5px', lineHeight: '1.6', color: '#98989D' }}>
                {'Taking you to QueryPrism in '}
                <span style={{ color: '#F5F5F7' }}>
                  {txt(v.countdown)}
                  {'s'}
                </span>
                {'…'}
              </p>
              <button
                onClick={v.openNow}
                style={{
                  alignSelf: 'flex-start',
                  height: '48px',
                  padding: '0 22px',
                  borderRadius: '999px',
                  border: '0',
                  background: '#64A8FF',
                  color: '#000000',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                {'Open QueryPrism now →'}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
