import { type V } from '@/lib/products/dc';
import { Hero } from '@/components/products/views/query-prism/Hero';
import { HowItWorks } from '@/components/products/views/query-prism/HowItWorks';
import { AppDemo } from '@/components/products/views/query-prism/AppDemo';
import { Fanout } from '@/components/products/views/query-prism/Fanout';
import { Coverage } from '@/components/products/views/query-prism/Coverage';
import { Serp } from '@/components/products/views/query-prism/Serp';
import { Clusters } from '@/components/products/views/query-prism/Clusters';
import { Recovery } from '@/components/products/views/query-prism/Recovery';
import { Trial } from '@/components/products/views/query-prism/Trial';
import { NextSteps } from '@/components/products/views/query-prism/NextSteps';

/** QueryPrism product page. */
export function QueryPrismView({ v }: { v: V }) {
  return (
    <div data-screen-label="QueryPrism">
      <Hero v={v} />
      <HowItWorks v={v} />
      <AppDemo v={v} />
      <Fanout v={v} />
      <Coverage v={v} />
      <Serp v={v} />
      <Clusters v={v} />
      <Recovery v={v} />
      <Trial v={v} />
      <NextSteps v={v} />
    </div>
  );
}
