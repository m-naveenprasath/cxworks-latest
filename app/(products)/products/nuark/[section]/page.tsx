import ProductsApp from '@/components/products/ProductsApp';
import { pageMetadata, sectionParams } from '@/lib/products/pages';

/** Section URLs (e.g. /nuark/agents/) render the NUARK page and scroll to that section on load. */
export const dynamicParams = false;
export const generateStaticParams = () => sectionParams('nuark');
export const metadata = pageMetadata('nuark');

export default function NuarkSectionPage() {
  return <ProductsApp startPage="nuark" />;
}
