const options = [
  {
    option: '--conf <path>',
    desc: 'path to optional conf overrides file',
  },
  {
    option: '--strategy <name>',
    desc: 'strategy to use',
    type: String,
    def: (conf) => conf.strategy,
  },
  {
    option: '--order_type <type>',
    desc: 'order type to use (maker/taker)',
    type: /^(maker|taker)$/i,
    def: (conf) => conf.order_type,
  },
  {
    option: '--paper',
    desc: 'use paper trading mode (no real trades will take place)',
    type: Boolean,
    def: () => false,
  },
  {
    option: '--manual',
    desc: 'watch price and account balance, but do not perform trades automatically',
    type: Boolean,
    def: () => false,
  },
  {
    option: '--non_interactive',
    desc: 'disable keyboard inputs to the bot',
    type: Boolean,
    def: () => false,
  },
  {
    option: '--currency_capital <amount>',
    desc: 'for paper trading, amount of start capital in currency',
    type: Number,
    def: (conf) => conf.currency_capital,
  },
  {
    option: '--asset_capital <amount>',
    desc: 'for paper trading, amount of start capital in asset',
    type: Number,
    def: (conf) => conf.asset_capital,
  },
  {
    option: '--avg_slippage_pct <pct>',
    desc: 'avg. amount of slippage to apply to paper trades',
    type: Number,
    def: (conf) => conf.avg_slippage_pct,
  },
  {
    option: '--buy_pct <pct>',
    desc: 'buy with this % of currency balance',
    type: Number,
    def: (conf) => conf.buy_pct,
  },
  {
    option: '--deposit <amt>',
    desc: 'absolute initial capital (in currency) at the bots disposal (previously --buy_max_amt)',
    type: Number,
    def: (conf) => conf.deposit,
  },
  {
    option: '--sell_pct <pct>',
    desc: 'sell with this % of asset balance',
    type: Number,
    def: (conf) => conf.sell_pct,
  },
  {
    option: '--markdown_buy_pct <pct>',
    desc: '% to mark down buy price',
    type: Number,
    def: (conf) => conf.markdown_buy_pct,
  },
  {
    option: '--markup_sell_pct <pct>',
    desc: '% to mark up sell price',
    type: Number,
    def: (conf) => conf.markup_sell_pct,
  },
  {
    option: '--order_adjust_time <ms>',
    desc: 'adjust bid/ask on this interval to keep orders competitive',
    type: Number,
    def: (conf) => conf.order_adjust_time,
  },
  {
    option: '--order_poll_time <ms>',
    desc: 'poll order status on this interval',
    type: Number,
    def: (conf) => conf.order_poll_time,
  },
  {
    option: '--sell_stop_pct <pct>',
    desc: 'sell if price drops below this % of bought price',
    type: Number,
    def: (conf) => conf.sell_stop_pct,
  },
  {
    option: '--buy_stop_pct <pct>',
    desc: 'buy if price surges above this % of sold price',
    type: Number,
    def: (conf) => conf.buy_stop_pct,
  },
  {
    option: '--profit_stop_enable_pct <pct>',
    desc: 'enable trailing sell stop when reaching this % profit',
    type: Number,
    def: (conf) => conf.profit_stop_enable_pct,
  },
  {
    option: '--profit_stop_pct <pct>',
    desc: 'maintain a trailing stop this % below the high-water mark of profit',
    type: Number,
    def: (conf) => conf.profit_stop_pct,
  },
  {
    option: '--max_sell_loss_pct <pct>',
    desc: 'avoid selling at a loss pct under this float',
    type: Number,
    def: (conf) => conf.max_sell_loss_pct,
  },
  {
    option: '--max_buy_loss_pct <pct>',
    desc: 'avoid buying at a loss pct over this float',
    type: Number,
    def: (conf) => conf.max_buy_loss_pct,
  },
  {
    option: '--max_slippage_pct <pct>',
    desc: 'avoid selling at a slippage pct above this float',
    type: Number,
    def: (conf) => conf.max_slippage_pct,
  },
  {
    option: '--rsi_periods <periods>',
    desc: 'number of periods to calculate RSI at',
    type: Number,
    def: (conf) => conf.rsi_periods,
  },
  {
    option: '--poll_trades <ms>',
    desc: 'poll new trades at this interval in ms',
    type: Number,
    def: (conf) => conf.poll_trades,
  },
  {
    option: '--currency_increment <amount>',
    desc: 'Currency increment, if different than the asset increment',
    type: String,
    def: () => null,
  },
  {
    option: '--keep_lookback_periods <amount>',
    desc: 'Keep this many lookback periods max. ',
    type: Number,
    def: (conf) => conf.keep_lookback_periods,
  },
  {
    option: '--exact_buy_orders',
    desc: 'instead of only adjusting maker buy when the price goes up, adjust it if price has changed at all',
  },
  {
    option: '--exact_sell_orders',
    desc: 'instead of only adjusting maker sell when the price goes down, adjust it if price has changed at all',
  },
  {
    option: '--use_prev_trades',
    desc: 'load and use previous trades for stop-order triggers and loss protection',
  },
  {
    option: '--min_prev_trades <number>',
    desc:
      'minimum number of previous trades to load if use_prev_trades is enabled, set to 0 to disable and use trade time instead',
    type: Number,
    def: (conf) => conf.min_prev_trades,
  },
  {
    option: '--disable_stats',
    desc: 'disable printing order stats',
  },
  {
    option: '--reset_profit',
    desc: 'start new profit calculation from 0',
  },
  {
    option: '--use_fee_asset',
    desc: "Using separated asset to pay for fees. Such as binance's BNB or Huobi's HT",
    type: Boolean,
    def: () => false,
  },
  {
    option: '--run_for <minutes>',
    desc: 'Execute for a period of minutes then exit with status 0',
    type: String,
    def: () => null,
  },
  {
    option: '--debug',
    desc: 'output detailed debug info',
  },
]

module.exports = options
