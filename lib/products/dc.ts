import type { CSSProperties, ReactNode } from 'react';
import { isValidElement } from 'react';

/**
 * Small helpers shared by the page components.
 *
 * Every component receives `v`: the flat bag of values and handlers built by
 * `ProductsLogic.renderVals()` (lib/products-logic.ts). Content, state and click handlers all live there;
 * the components are just markup.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type V = Record<string, any>;

/** Inline-style string → React style object (keeps values exactly as written). */
export function css(input: unknown): CSSProperties | undefined {
  if (input == null) return undefined;
  if (typeof input === 'object') return input as CSSProperties;
  const out: Record<string, string> = {};
  for (const decl of String(input).split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const key = prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = decl.slice(i + 1).trim();
  }
  return out as CSSProperties;
}

/** Value → string for use inside attributes / style strings (null and undefined become ''). */
export function str(x: unknown): string {
  return x == null ? '' : String(x);
}

/** Value → text node. Booleans and empty values render nothing. */
export function txt(x: unknown): ReactNode {
  if (x === undefined || x === null || typeof x === 'boolean') return null;
  if (isValidElement(x) || Array.isArray(x)) return x as ReactNode;
  return String(x);
}

/** Anything → array (non-arrays render as an empty list). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function list(x: unknown): any[] {
  return Array.isArray(x) ? x : [];
}
