import { type V } from '@/lib/products/dc';

/** Home page — compare section. */
export function Compare({ v }: { v: V }) {
  return (
    <section id="compare" style={{ padding: '0 clamp(20px,5vw,64px) clamp(88px,10vw,140px)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <div
          data-reveal="1"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: '16px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#40C8E0',
              }}
            >
              {'How they differ'}
            </span>
            <h2
              style={{
                margin: '0',
                fontSize: 'clamp(32px,4vw,52px)',
                lineHeight: '1.04',
                letterSpacing: '-0.03em',
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: '500',
                textWrap: 'balance',
              }}
            >
              {'NUARK and QueryPrism, side by side.'}
            </h2>
          </div>
          <p
            style={{
              margin: '0',
              maxWidth: '420px',
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#98989D',
              textWrap: 'pretty',
            }}
          >
            {'One runs the whole ecommerce business. The other owns search and content, end to end.'}
          </p>
        </div>
        <div
          data-reveal="1"
          style={{
            borderRadius: '24px',
            border: '1px solid rgba(245,245,247,.1)',
            background: '#1C1C1E',
            overflowX: 'auto',
          }}
        >
          <div style={{ minWidth: '760px' }}>
            <div
              style={{
                position: 'sticky',
                top: '0',
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                background: '#2C2C2E',
              }}
            >
              <div
                style={{
                  padding: '20px',
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: '11px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: '#98989D',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {'Area'}
              </div>
              <div
                style={{
                  padding: '20px',
                  borderLeft: '1px solid rgba(64,200,224,.2)',
                  borderTop: '2px solid #40C8E0',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/images/products/nuark-logo.svg"
                  alt="NUARK"
                  style={{ height: '16px', width: 'auto', display: 'block' }}
                />
              </div>
              <div
                style={{
                  padding: '20px',
                  borderLeft: '1px solid rgba(100,168,255,.2)',
                  borderTop: '2px solid #64A8FF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                }}
              >
                <img
                  src="/images/products/queryprism-icon.svg"
                  alt=""
                  style={{ width: '22px', height: '22px', display: 'block' }}
                />
                <span style={{ fontWeight: '700', fontSize: '16px', letterSpacing: '-0.02em' }}>{'QueryPrism'}</span>
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'What it is'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'An AI agent for the whole ecommerce business'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'An SEO, AEO and GEO content intelligence platform'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Role in the lineup'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Flagship, all-in-one product'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Entry and specialist product'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Main job'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Run and improve the online store from one place'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Find what people search for, what your content misses, and what to write'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'How you use it'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Chat. You type what you want and NUARK works it out.'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Guided steps. Click through Seed Query → Gaps → Brief → Content, with no prompting needed.'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Where you start'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Any question or task about the business'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'A single seed query'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'What it feels like'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Talking to a smart colleague'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Using a purpose-built app with a clear process'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Skill needed'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'You need to know what to ask'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'You just follow the steps, so beginners do fine'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'What you see'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Answers and outputs in a conversation'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Visual screens: coverage scores, gap lists, an interactive topic map'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>
                {'What you get at the end'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Answers, audits, alerts and finished work across the business'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Coverage reports, content briefs, finished content and query cluster maps'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Repeatability'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Flexible, so each request can be different'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'The same proven process every time, which helps a team stay consistent'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Scope'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'The whole business: catalogue, ads, pricing, SEO, content, analytics'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Only search and content, from start to finish'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Depth'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'40+ skills across six business areas'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'One workflow, taken end to end'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Data it works with'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Connected store, marketing, ads, analytics and business data'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Search queries, search demand, SERPs and your page content'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>
                {'Search and content capabilities'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Included, in full'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'The core of the product'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>
                {'Catalogue, ads, pricing and brand'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Included'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Not part of the product'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Who it suits'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Ecommerce teams and leaders who juggle many areas'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'SEO and content teams, writers and agencies who live in one area'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Buyer'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Head of ecommerce, business owner, CMO'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'SEO lead, content manager, agency owner'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Fits non-ecommerce?'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Mostly built for online stores'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Yes: any brand, publisher, SaaS company or agency that wants search traffic'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Typical question'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'“Why did sales drop on this category last week?”'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'“What is my page missing for this topic?”'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Time to first value'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Grows as more connectors and skills are used'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Fast: one query gives a gap report in a single session'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Commitment'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'A bigger platform decision'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'A smaller, easier first purchase'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Price position'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Higher, broader value'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Lower, focused'}
              </div>
            </div>
            <div
              className="ph-hover-33d3dc"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.07)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: '14px', color: '#98989D' }}>{'Path between them'}</div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  background: 'rgba(64,200,224,.025)',
                }}
              >
                {'Already includes QueryPrism’s capabilities'}
              </div>
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '14.5px',
                  lineHeight: '1.5',
                  color: '#F5F5F7',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  background: 'rgba(100,168,255,.025)',
                }}
              >
                {'Natural upgrade to NUARK for ecommerce customers'}
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(150px,.8fr) minmax(0,1fr) minmax(0,1fr)',
                borderTop: '1px solid rgba(245,245,247,.1)',
                background: '#2C2C2E',
              }}
            >
              <div
                style={{
                  padding: '18px 20px',
                  fontSize: '14px',
                  color: '#98989D',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {'Next step'}
              </div>
              <div
                style={{
                  padding: '18px 20px',
                  borderLeft: '1px solid rgba(64,200,224,.12)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <button
                  onClick={v.goNuark}
                  style={{
                    height: '42px',
                    padding: '0 18px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                    border: '0',
                    background: '#40C8E0',
                    color: '#000000',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  {'Explore NUARK →'}
                </button>
                <button
                  onClick={v.openWaitlist}
                  style={{
                    height: '42px',
                    padding: '0 16px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                    border: '1px solid rgba(64,200,224,.4)',
                    background: 'transparent',
                    color: '#F5F5F7',
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  {'Join the waitlist'}
                </button>
              </div>
              <div
                style={{
                  padding: '18px 20px',
                  borderLeft: '1px solid rgba(100,168,255,.12)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <button
                  onClick={v.goQP}
                  style={{
                    height: '42px',
                    padding: '0 18px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                    border: '0',
                    background: '#64A8FF',
                    color: '#000000',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  {'Explore QueryPrism →'}
                </button>
                <button
                  onClick={v.openTrial}
                  style={{
                    height: '42px',
                    padding: '0 16px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                    border: '1px solid rgba(100,168,255,.4)',
                    background: 'transparent',
                    color: '#F5F5F7',
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  {'Start free trial'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
