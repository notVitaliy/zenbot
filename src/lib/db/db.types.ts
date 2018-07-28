export interface SessionCollection {
  sessionId: string
  start_time: number
  last_run: number
}

export interface TradeItem {
  trade_id: number
  time: number
  size: number
  price: number
  side: 'buy' | 'sell'
}

export type TradeCollection = TradeItem & {
  exchange: string
  symbol: string
}

export interface PeriodItem {
  time: number
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export interface Marker {
  symbol: string
  exchange: string
  from: number
  to: number
  oldestTime: number
  newestTime: number
}

export type orderType = 'market' | 'limit'
export type sideType = 'buy' | 'sell'

export interface OrderItem {
  orderId: string
  price: number
  size: number
  time: number
  type: orderType
  side: sideType
  status: 'open' | 'closed' | 'canceled'
}

export type OrderCollection = OrderItem & {
  sessionId: string
  strategy: string
  exchange: string
  symbol: string
}

export interface Options {
  session_id: string
  period: string
  strategy: string
  sell_stop_pct: number
  buy_stop_pct: number
  profit_stop_enable_pct: number
  profit_stop_pct: number
  max_slippage_pct: number
  buy_pct: number
  sell_pct: number
  order_adjust_time: number
  max_sell_loss_pct: number
  max_buy_loss_pct: number
  order_poll_time: number
  markdown_buy_pct: number
  markup_sell_pct: number
  order_type: string
  keep_lookback_periods: number
  poll_trades: number
  currency_capital: number
  asset_capital: number
  rsi_periods: number
  avg_slippage_pct: number
  min_prev_trades: number
  currency_increment: number
  use_prev_trades: boolean
  exact_buy_orders: boolean
  exact_sell_orders: boolean
  reset_profit: boolean
  use_fee_asset: boolean
  run_for: number
  debug: number
  stats: boolean
  mode: string
  symbol: {
    exchange_id: string
    product_id: string
    asset: string
    currency: string
    normalized: string
  }
}

export interface Wallet {
  currency: number
  asset: number
}

export type WalletCollection = Wallet & {
  sessionId: string
  exchange: string
  symbol: string
  strategy: string
  time: number
}
