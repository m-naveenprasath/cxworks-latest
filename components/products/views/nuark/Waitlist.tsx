import { Fragment } from 'react';
import { type V, css, list, str, txt } from '@/lib/products/dc';

/** NUARK page — nuark-waitlist section. */
export function Waitlist({ v }: { v: V }) {
  return (
    <section id="nuark-waitlist" style={{ padding: '0 clamp(20px,5vw,64px) clamp(88px,10vw,140px)' }}>
      <div
        data-reveal="1"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: 'clamp(28px,5vw,64px)',
          borderRadius: '32px',
          background: 'radial-gradient(70% 90% at 0% 100%, rgba(64,200,224,.16), transparent 60%), #1C1C1E',
          border: '1px solid rgba(64,200,224,.22)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: '40px 64px',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/images/products/nuark-logo.svg"
              alt="NUARK"
              style={{ height: '22px', width: 'auto', display: 'block' }}
            />
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '999px',
                border: '1px solid rgba(64,200,224,.35)',
                fontSize: '12px',
                color: '#7FDCEC',
              }}
            >
              {'Waitlist open'}
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
            {'Join the NUARK waitlist.'}
          </h2>
          <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#98989D', textWrap: 'pretty' }}>
            {
              'One conversation to ask, analyse and act across catalogue, commerce health, advertising, content, SEO, pricing and brand. We onboard teams in small groups.'
            }
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
            <div style={{ display: 'flex', gap: '12px', fontSize: '15px' }}>
              <span style={{ color: '#40C8E0' }}>{'✓'}</span>
              {'40+ skills, 34 agents, all live in production'}
            </div>
            <div style={{ display: 'flex', gap: '12px', fontSize: '15px' }}>
              <span style={{ color: '#40C8E0' }}>{'✓'}</span>
              {'Works on your real systems, not exports'}
            </div>
            <div style={{ display: 'flex', gap: '12px', fontSize: '15px' }}>
              <span style={{ color: '#40C8E0' }}>{'✓'}</span>
              {'No new dashboards to learn'}
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
          {v.inShowForm ? (
            <form onSubmit={v.submitInline} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}
              >
                {list(v.fields).map((f, i1) => (
                  <Fragment key={i1}>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      <span style={{ fontSize: '13px', color: '#C7C7CC' }}>{txt(f?.label)}</span>
                      <input
                        className="ph-focus-76ee2b"
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
                      {f?.hasError ? (
                        <span style={{ fontSize: '12.5px', color: '#FF8A80' }}>{txt(f?.error)}</span>
                      ) : null}
                    </label>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <span style={{ fontSize: '13px', color: '#C7C7CC' }}>{'Role'}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {list(v.roleChips).map((c, i1) => (
                    <Fragment key={i1}>
                      <button
                        type="button"
                        onClick={c?.onClick}
                        style={css(
                          `height:36px; padding:0 13px; border-radius:999px; border:1px solid ${str(c?.border)}; background:${str(c?.bg)}; color:${str(c?.color)}; font-size:13px; cursor:pointer; transition:all .2s`,
                        )}
                      >
                        {txt(c?.label)}
                      </button>
                    </Fragment>
                  ))}
                </div>
                {v.hasRoleError ? (
                  <span style={{ fontSize: '12.5px', color: '#FF8A80' }}>{txt(v.roleError)}</span>
                ) : null}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <span style={{ fontSize: '13px', color: '#C7C7CC' }}>{'What are you interested in?'}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {list(v.interestChips).map((c, i1) => (
                    <Fragment key={i1}>
                      <button
                        type="button"
                        onClick={c?.onClick}
                        style={css(
                          `height:36px; padding:0 13px; border-radius:999px; border:1px solid ${str(c?.border)}; background:${str(c?.bg)}; color:${str(c?.color)}; font-size:13px; cursor:pointer; transition:all .2s`,
                        )}
                      >
                        {txt(c?.label)}
                      </button>
                    </Fragment>
                  ))}
                </div>
                {v.hasInterestError ? (
                  <span style={{ fontSize: '12.5px', color: '#FF8A80' }}>{txt(v.interestError)}</span>
                ) : null}
              </div>
              {v.inError ? (
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
                  {"We couldn't submit that just now. Check your connection and try again."}
                </div>
              ) : null}
              <button
                className="ph-hover-0882f3"
                type="submit"
                style={{
                  height: '54px',
                  borderRadius: '999px',
                  border: '0',
                  background: '#40C8E0',
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
                {v.inLoading ? (
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
                    {'Joining…'}
                  </>
                ) : null}
                {v.inNotLoading ? <>{'Join the Waitlist'}</> : null}
              </button>
              <span style={{ fontSize: '12px', color: '#98989D', textAlign: 'center' }}>
                {"We'll only use these details to contact you about NUARK."}
              </span>
            </form>
          ) : null}{' '}
          {v.inSuccess ? (
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
                  border: '1px solid #40C8E0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#40C8E0',
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
                {"You're on the NUARK waitlist."}
              </h3>
              <p style={{ margin: '0', fontSize: '15.5px', lineHeight: '1.6', color: '#98989D' }}>
                {'Thanks, '}
                {txt(v.successName)}
                {". We'll email "}
                <span style={{ color: '#F5F5F7' }}>{txt(v.successEmail)}</span>
                {' when early access opens for '}
                {txt(v.successCompany)}
                {'.'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <button
                  onClick={v.openNuarkSite}
                  style={{
                    height: '48px',
                    padding: '0 20px',
                    borderRadius: '999px',
                    border: '0',
                    background: '#40C8E0',
                    color: '#000000',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  {'Explore NUARK ↗'}
                </button>
                <button
                  onClick={v.openTrial}
                  style={{
                    height: '48px',
                    padding: '0 20px',
                    borderRadius: '999px',
                    border: '1px solid rgba(100,168,255,.4)',
                    background: 'transparent',
                    color: '#F5F5F7',
                    fontSize: '15px',
                    cursor: 'pointer',
                  }}
                >
                  {'Try QueryPrism'}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
