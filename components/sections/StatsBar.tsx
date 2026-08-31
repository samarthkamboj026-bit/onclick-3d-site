import { STATS } from "@/lib/constants";
import StatCounter from "@/components/ui/StatCounter";

export default function StatsBar() {
  return (
    <section className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <StatCounter key={s.label} value={s.value} prefix={s.prefix} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
