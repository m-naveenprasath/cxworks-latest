import ProductsApp from '@/components/products/ProductsApp';
import { pageMetadata, sectionParams } from '@/lib/products/pages';

/** Section URLs (e.g. /query-prism/trial/) render the QueryPrism page and scroll to that section on load. */
export const dynamicParams = false;
export const generateStaticParams = () => sectionParams('query-prism');
export const metadata = pageMetadata('query-prism');

export default function QueryPrismSectionPage() {
  return <ProductsApp startPage="query-prism" />;
}
