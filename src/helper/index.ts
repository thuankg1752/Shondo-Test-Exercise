export const formatToVND = (amount: number): string => {
  const formattedNumber = new Intl.NumberFormat('vi-VN', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);

  return `${formattedNumber} VNĐ`;
};

export const valueDiscountPercent = (price: number, discountPrice: number): string =>{
  const difference = discountPrice - price;
  return `${(( difference / price ) * 100).toFixed(2)}%`;
}
