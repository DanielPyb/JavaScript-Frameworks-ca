const FORMATTED_CURRENCY = new Intl.NumberFormat(undefined, {
  currency: "NOK",
  style: "currency",
});

export function currencyFormatter(price) {
  return FORMATTED_CURRENCY.format(price);
}
