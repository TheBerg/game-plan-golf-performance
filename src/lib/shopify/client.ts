/**
 * Shopify Storefront API Client (Stub)
 *
 * This file is a placeholder for the future Shopify integration.
 * Once your Shopify store is set up, replace these stubs with actual
 * Storefront API calls using the GraphQL client of your choice
 * (e.g. @shopify/hydrogen-react, graphql-request, or fetch).
 *
 * Required environment variables:
 *   - NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
 *   - NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
 *
 * Shopify Storefront API docs:
 *   https://shopify.dev/docs/api/storefront
 */

import type {
  ShopifyProduct,
  ShopifyCheckout,
  ShopifyLineItem,
} from "./types";

// TODO: Replace with actual Shopify Storefront API endpoint
// const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
// const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
// const STOREFRONT_API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

export const shopifyClient = {
  /**
   * Fetch all products from the storefront.
   *
   * TODO: Implement Storefront API query:
   *   query { products(first: 20) { edges { node { id title handle ... } } } }
   */
  async getProducts(): Promise<ShopifyProduct[]> {
    // TODO: Replace with actual Storefront API call
    console.warn("[shopifyClient.getProducts] Using stub — no Shopify store connected.");
    return [];
  },

  /**
   * Fetch a single product by its handle (URL slug).
   *
   * TODO: Implement Storefront API query:
   *   query { productByHandle(handle: $handle) { id title handle ... } }
   */
  async getProduct(handle: string): Promise<ShopifyProduct | null> {
    // TODO: Replace with actual Storefront API call
    console.warn(
      `[shopifyClient.getProduct] Using stub for handle "${handle}" — no Shopify store connected.`,
    );
    return null;
  },

  /**
   * Create a new checkout with the given line items.
   *
   * TODO: Implement Storefront API mutation:
   *   mutation checkoutCreate($input: CheckoutCreateInput!) {
   *     checkoutCreate(input: $input) { checkout { id webUrl lineItems { ... } } }
   *   }
   */
  async createCheckout(
    items: Array<{ variantId: string; quantity: number }>,
  ): Promise<ShopifyCheckout | null> {
    // TODO: Replace with actual Storefront API call
    console.warn(
      `[shopifyClient.createCheckout] Using stub with ${items.length} item(s) — no Shopify store connected.`,
    );
    return null;
  },

  /**
   * Add line items to an existing checkout.
   *
   * TODO: Implement Storefront API mutation:
   *   mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
   *     checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
   *       checkout { id webUrl lineItems { ... } }
   *     }
   *   }
   */
  async addToCheckout(
    checkoutId: string,
    items: Array<{ variantId: string; quantity: number }>,
  ): Promise<ShopifyCheckout | null> {
    // TODO: Replace with actual Storefront API call
    console.warn(
      `[shopifyClient.addToCheckout] Using stub for checkout "${checkoutId}" with ${items.length} item(s) — no Shopify store connected.`,
    );
    return null;
  },
};
