// Deklarasi untuk window.fbq
interface Window {
  fbq: any;
  _fbq: any;
}

// Deklarasi untuk fungsi fbq global
declare function fbq(
  type: "init" | "track" | "trackCustom",
  eventName: string,
  params?: {
    content_name?: string;
    currency?: string;
    value?: number;
    [key: string]: any;
  }
): void;

// Deklarasi untuk event-event Facebook Pixel
interface FacebookPixelEvent {
  content_name?: string;
  content_type?: string;
  currency?: string;
  value?: number;
  content_ids?: string[];
  content_category?: string;
  num_items?: number;
  status?: string;
  search_string?: string;
  [key: string]: any;
}

// Declare namespace untuk fbq
declare namespace fbq {
  function push(...args: any[]): void;
  function loaded(): boolean;
  function version(): string;
  function getState(): any;
}
