import ProductsApp from '@/components/products/ProductsApp';
import { pageMetadata } from '@/lib/products/pages';

export const metadata = pageMetadata('home');

export default function HomePage() {
  return <ProductsApp startPage="home" />;
}
