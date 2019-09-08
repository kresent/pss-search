export function marketAdapter(entries) {
  return entries.map(({ _attributes: e }) => {
    const [currency, price] = e.ActivityArgument.split(':');
    const message = e.Message.replace(/Vendre |Selling |Продает |Verkauf |Prodává |在卖|Venda|ขาย |판매|販售中 |중 |販售中/g, "").split(' ');
    const [quantity, ...goods] = message;

    return {
      currency,
      price,
      quantity,
      goods: goods.join(' '),
      user: e.UserName,
    }
  })
}
