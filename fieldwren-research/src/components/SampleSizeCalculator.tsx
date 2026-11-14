"use client";

import { useMemo, useState } from "react";

const zValues: Record<string, number> = { "90": 1.645, "95": 1.96, "99": 2.576 };

export function SampleSizeCalculator() {
  const [conf, setConf] = useState("95");
  const [margin, setMargin] = useState(5);
  const [p, setP] = useState(50);
  const [pop, setPop] = useState("");
  const [nonResp, setNonResp] = useState(10);

  const result = useMemo(() => {
    const z = zValues[conf];
    const e = margin / 100;
    const prop = p / 100;
    if (!(e > 0 && e < 1) || !(prop > 0 && prop < 1)) return null;
    const n0 = (z * z * prop * (1 - prop)) / (e * e);
    const N = Number(pop);
    const n = N > 0 ? n0 / (1 + (n0 - 1) / N) : n0;
    const base = Math.ceil(n);
    const adjusted = Math.ceil(base / (1 - Math.min(nonResp, 90) / 100));
    return { base, adjusted };
  }, [conf, margin, p, pop, nonResp]);

  const field =
    "mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-ink focus:border-blue focus:outline-none";

  return (
    <div className="card grid gap-8 p-6 md:grid-cols-2 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="conf" className="text-sm font-semibold">Confidence level</label>
          <select id="conf" className={field} value={conf} onChange={(e) => setConf(e.target.value)}>
            <option value="90">90%</option>
            <option value="95">95%</option>
            <option value="99">99%</option>
          </select>
        </div>
        <div>
          <label htmlFor="margin" className="text-sm font-semibold">Margin of error (%)</label>
          <input id="margin" type="number" min={1} max={20} className={field} value={margin} onChange={(e) => setMargin(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="p" className="text-sm font-semibold">Expected proportion (%)</label>
          <input id="p" type="number" min={1} max={99} className={field} value={p} onChange={(e) => setP(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="pop" className="text-sm font-semibold">Population size (optional)</label>
          <input id="pop" type="number" min={1} className={field} value={pop} onChange={(e) => setPop(e.target.value)} placeholder="Leave blank if large" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="nr" className="text-sm font-semibold">Expected non-response (%)</label>
          <input id="nr" type="number" min={0} max={90} className={field} value={nonResp} onChange={(e) => setNonResp(Number(e.target.value))} />
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-xl bg-sky p-6" aria-live="polite">
        {result ? (
          <>
            <p className="text-sm font-semibold text-slate">Minimum sample size</p>
            <p className="font-serif text-5xl font-semibold text-navy">{result.base.toLocaleString()}</p>
            <p className="mt-4 text-sm font-semibold text-slate">Invite this many, allowing for non-response</p>
            <p className="font-serif text-4xl font-semibold text-blue">{result.adjusted.toLocaleString()}</p>
            <p className="mt-4 text-xs text-slate">
              For surveys estimating a single percentage with simple random sampling. Other designs need a different calculation.
            </p>
          </>
        ) : (
          <p className="text-slate">Enter values between the limits shown to see your sample size.</p>
        )}
      </div>
    </div>
  );
}
