export const Currencies = [
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
  { value: "GBP", label: "£ Pound", locale: "en-GB" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
  { value: "INR", label: "₹ Rupee", locale: "en-IN" },
  { value: "CNY", label: "¥ Yuan", locale: "zh-CN" },
  { value: "KRW", label: "₩ Won", locale: "ko-KR" },
  { value: "HKD", label: "HK$ Dollar", locale: "en-HK" },
];

export type Currency = (typeof Currencies)[number];
