import React, { useState, useEffect, useCallback } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Send,
  FileText,
  CreditCard,
  LogOut,
  RefreshCw,
} from "lucide-react";

const COLORS = {
  navy: "#0F1F38",
  navySoft: "#152945",
  parchment: "#F6F1E7",
  parchmentDeep: "#EFE7D8",
  brass: "#B08D57",
  brassDim: "#D9C6A3",
  forest: "#2F5233",
  rust: "#8C3B2E",
  slate: "#5B6472",
  ink: "#20242C",
};

const FONTS = {
  display: "'Fraunces', Georgia, serif",
  body: "'Inter', system-ui, sans-serif",
  mono: "'IBM Plex Mono', 'Courier New', monospace",
};

// Mock fallback data, used if the API call fails or during local preview.
const MOCK_ACCOUNT = {
  name: "Chandrakant Patil",
  accountNumber: "IN29 GTB 0042 8817",
  accountType: "Premier Savings",
  balance: 284560.75,
  currency: "INR",
};

const MOCK_TRANSACTIONS = [
  { id: 1, date: "2026-08-24", description: "Salary Credit — Veracity Systems", amount: 92000, type: "credit" },
  { id: 2, date: "2026-08-23", description: "Electricity Board Auto-Debit", amount: 2140.5, type: "debit" },
  { id: 3, date: "2026-08-22", description: "Transfer to Rohan Deshmukh", amount: 5000, type: "debit" },
  { id: 4, date: "2026-08-21", description: "Interest Credit — Savings", amount: 318.42, type: "credit" },
  { id: 5, date: "2026-08-19", description: "Card Purchase — Crossword Books", amount: 1249, type: "debit" },
  { id: 6, date: "2026-08-18", description: "Refund — Flight Cancellation", amount: 7600, type: "credit" },
];

function formatCurrency(amount, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

export default function Dashboard({ apiBaseUrl = "/api" }) {
  const [account, setAccount] = useState(MOCK_ACCOUNT);
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
  const [loading, setLoading] = useState(false);
  const [usingMock, setUsingMock] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const token = typeof window !== "undefined" ? window.__AUTH_TOKEN__ : null;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const [accountRes, txnRes] = await Promise.all([
        fetch(`${apiBaseUrl}/account/summary`, { headers }),
        fetch(`${apiBaseUrl}/account/transactions?limit=10`, { headers }),
      ]);

      if (!accountRes.ok || !txnRes.ok) throw new Error("Request failed");

      const accountData = await accountRes.json();
      const txnData = await txnRes.json();

      setAccount(accountData);
      setTransactions(txnData);
      setUsingMock(false);
    } catch (e) {
      // Fall back to mock data silently — this keeps the page usable
      // for design preview even without a live backend connected.
      setAccount(MOCK_ACCOUNT);
      setTransactions(MOCK_TRANSACTIONS);
      setUsingMock(true);
    } finally {
      setLoading(false);
    }
  }, [apiBaseUrl]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const quickActions = [
    { label: "Send money", icon: Send },
    { label: "Pay a bill", icon: CreditCard },
    { label: "View statement", icon: FileText },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.parchment,
        fontFamily: FONTS.body,
        color: COLORS.ink,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .gtb-tabular { font-variant-numeric: tabular-nums; }
        .gtb-row:hover { background: ${COLORS.parchmentDeep}; }
        .gtb-action:hover { background: ${COLORS.navy}; color: ${COLORS.parchment} !important; }
        .gtb-action:hover svg { color: ${COLORS.parchment} !important; }
        .gtb-focus:focus-visible { outline: 2px solid ${COLORS.brass}; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* Header */}
      <header
        style={{ background: COLORS.navy, color: COLORS.parchment }}
        className="w-full"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div
              style={{
                width: 34,
                height: 34,
                border: `1.5px solid ${COLORS.brass}`,
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONTS.display,
                fontSize: 16,
                color: COLORS.brass,
              }}
              aria-hidden="true"
            >
              G
            </div>
            <div>
              <div style={{ fontFamily: FONTS.display, fontSize: 18, letterSpacing: "0.02em" }}>
                GlobalTrust Bank
              </div>
              <div style={{ fontSize: 11, color: COLORS.brassDim, letterSpacing: "0.08em" }}>
                PERSONAL BANKING
              </div>
            </div>
          </div>
          <button
            className="gtb-focus flex items-center gap-2"
            style={{
              background: "transparent",
              border: `1px solid ${COLORS.brassDim}`,
              color: COLORS.parchment,
              borderRadius: "4px",
              padding: "8px 14px",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            <LogOut size={14} />
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Greeting */}
        <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 4 }}>
          Welcome back,
        </p>
        <h1
          style={{
            fontFamily: FONTS.display,
            fontSize: 28,
            fontWeight: 600,
            color: COLORS.navy,
            marginBottom: 28,
          }}
        >
          {account.name.split(" ")[0]}
        </h1>

        {/* Balance card */}
        <section
          style={{
            background: "#FFFFFF",
            border: `1px solid ${COLORS.brassDim}`,
            borderRadius: "6px",
            padding: "28px 32px",
            marginBottom: 32,
          }}
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div style={{ fontSize: 12, letterSpacing: "0.08em", color: COLORS.slate, marginBottom: 6 }}>
                {account.accountType.toUpperCase()} · {account.accountNumber}
              </div>
              <div
                className="gtb-tabular"
                style={{
                  fontFamily: FONTS.display,
                  fontSize: 42,
                  fontWeight: 600,
                  color: COLORS.navy,
                  lineHeight: 1.1,
                }}
              >
                {formatCurrency(account.balance, account.currency)}
              </div>
              <div
                style={{
                  height: 2,
                  width: 64,
                  background: COLORS.brass,
                  marginTop: 12,
                }}
              />
              <div style={{ fontSize: 12, color: COLORS.slate, marginTop: 10 }}>
                Available balance{usingMock ? " · showing sample data" : ""}
              </div>
            </div>
            <button
              onClick={loadData}
              className="gtb-focus flex items-center gap-2"
              style={{
                background: "transparent",
                border: `1px solid ${COLORS.brassDim}`,
                color: COLORS.slate,
                borderRadius: "4px",
                padding: "7px 12px",
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
              {loading ? "Refreshing" : "Refresh"}
            </button>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mb-10">
          <div className="grid grid-cols-3 gap-4">
            {quickActions.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="gtb-action gtb-focus flex flex-col items-start gap-3"
                style={{
                  background: COLORS.parchment,
                  border: `1px solid ${COLORS.navy}`,
                  borderRadius: "6px",
                  padding: "18px",
                  cursor: "pointer",
                  transition: "background 150ms ease, color 150ms ease",
                  textAlign: "left",
                }}
              >
                <Icon size={18} style={{ color: COLORS.navy }} />
                <span style={{ fontSize: 14, fontWeight: 500, color: COLORS.navy }}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Ledger */}
        <section>
          <div className="flex items-baseline justify-between mb-3">
            <h2
              style={{
                fontFamily: FONTS.display,
                fontSize: 18,
                color: COLORS.navy,
                fontWeight: 600,
              }}
            >
              Recent activity
            </h2>
            <span style={{ fontSize: 12, color: COLORS.slate }}>
              Last {transactions.length} entries
            </span>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: `1px solid ${COLORS.brassDim}`,
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            {transactions.map((t, i) => {
              const isCredit = t.type === "credit";
              return (
                <div
                  key={t.id}
                  className="gtb-row flex items-center justify-between px-5 py-4"
                  style={{
                    borderTop: i === 0 ? "none" : `1px solid ${COLORS.parchmentDeep}`,
                    transition: "background 120ms ease",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "4px",
                        background: isCredit ? "#EAF1EA" : "#F5E9E6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {isCredit ? (
                        <ArrowDownRight size={15} style={{ color: COLORS.forest }} />
                      ) : (
                        <ArrowUpRight size={15} style={{ color: COLORS.rust }} />
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, color: COLORS.ink, fontWeight: 500 }}>
                        {t.description}
                      </div>
                      <div
                        className="gtb-tabular"
                        style={{ fontFamily: FONTS.mono, fontSize: 11, color: COLORS.slate, marginTop: 2 }}
                      >
                        {formatDate(t.date)}
                      </div>
                    </div>
                  </div>
                  <div
                    className="gtb-tabular"
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: 14,
                      fontWeight: 500,
                      color: isCredit ? COLORS.forest : COLORS.rust,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {isCredit ? "+" : "−"} {formatCurrency(t.amount, account.currency).replace("₹", "₹ ")}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {error && (
          <p style={{ color: COLORS.rust, fontSize: 13, marginTop: 16 }}>
            {error}
          </p>
        )}
      </main>
    </div>
  );
}
