export const toPersianDigits = (value) => {
  if (value === null || value === undefined) return '';

  return String(value).replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[digit]);
};

export const formatNumber = (value) => {
  return new Intl.NumberFormat('fa-IR').format(value);
};
