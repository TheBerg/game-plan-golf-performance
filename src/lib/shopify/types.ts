/**
 * Shopify Storefront API type definitions.
 *
 * These interfaces model the data structures returned by the Shopify
 * Storefront GraphQL API. They will be used by the shopify client
 * once the store is connected.
 */

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: string;
  available: boolean;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: ShopifyImage[];
  variants: ShopifyVariant[];
}

export interface ShopifyLineItem {
  id: string;
  title: string;
  quantity: number;
  variant: ShopifyVariant;
}

export interface ShopifyCheckout {
  id: string;
  webUrl: string;
  lineItems: ShopifyLineItem[];
}
