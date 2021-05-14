export default function currencyFilter(value, currency = 'BYN'){
    return Intl.NumberFormat('ru-Ru', {
        style: 'currency',
        currency
    }).format(value);
}