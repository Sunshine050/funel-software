import Link from "next/link";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <div
      className={`flex flex-col rounded-2xl border bg-white/80 p-6 shadow-sm ring-1 ring-black/5 ${
        product.popular ? "border-indigo-500 shadow-md" : "border-zinc-100"
      }`}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-zinc-900">
          {product.name}
        </h3>
        {product.badge ? (
          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-medium text-indigo-700">
            {product.badge}
          </span>
        ) : null}
      </div>

      <p className="mb-4 text-xs text-zinc-500">{product.description}</p>

      <div className="mb-4">
        <span className="text-xl font-semibold text-zinc-900">
          {product.price.toLocaleString("th-TH", {
            style: "currency",
            currency: product.currency,
            maximumFractionDigits: 0,
          })}
        </span>
        <span className="ml-1 text-[11px] text-zinc-400">ชำระครั้งเดียว</span>
      </div>

      <ul className="mb-5 flex-1 space-y-1.5 text-xs text-zinc-600">
        {product.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/checkout/${product.id}`}
        className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800"
      >
        เลือกแพ็กเกจนี้
      </Link>
    </div>
  );
}

