import type { Thing, WithContext } from 'schema-dts';

/**
 * JSON-LD requires a "@context" property on the top-level object.
 * schema-dts provides WithContext<T> for this; pass objects that include '@context'.
 */
export const SCHEMA_CONTEXT = 'https://schema.org' as const;

/**
 * Serialize a WithContext<T> JSON-LD object for use in
 * <script type="application/ld+json">. Caller must include '@context'.
 * (schema-dts docs return the full script tag for static HTML; we return
 * only the JSON so React can render a real script element.)
 */
export function JsonLd<T extends Thing>(json: WithContext<T>): string {
  return JSON.stringify(json);
}

/**
 * Serialize an array of JSON-LD objects (e.g. Organization + WebSite on home page).
 */
export function JsonLdArray(schemas: WithContext<Thing>[]): string {
  return JSON.stringify(schemas);
}
