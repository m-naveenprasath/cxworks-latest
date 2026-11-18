import { type V } from '@/lib/products/dc';
import { Hero } from '@/components/products/views/nuark/Hero';
import { Problem } from '@/components/products/views/nuark/Problem';
import { Agents } from '@/components/products/views/nuark/Agents';
import { Interface } from '@/components/products/views/nuark/Interface';
import { Workflow } from '@/components/products/views/nuark/Workflow';
import { Architecture } from '@/components/products/views/nuark/Architecture';
import { Waitlist } from '@/components/products/views/nuark/Waitlist';
import { NextSteps } from '@/components/products/views/nuark/NextSteps';

/** NUARK product page. */
export function NuarkView({ v }: { v: V }) {
  return (
    <div data-screen-label="NUARK">
      <Hero v={v} />
      <Problem />
      <Agents v={v} />
      <Interface v={v} />
      <Workflow v={v} />
      <Architecture v={v} />
      <Waitlist v={v} />
      <NextSteps v={v} />
    </div>
  );
}
