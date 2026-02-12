import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-xs font-semibold text-white">
            F
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-zinc-900">
              Funnel Launchpad
            </span>
            <span className="text-xs text-zinc-500">
              Digital Product Funnel Studio
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          <Link href="#features" className="hover:text-zinc-900">
            ฟีเจอร์
          </Link>
          <Link href="#workflow" className="hover:text-zinc-900">
            กระบวนการทำงาน
          </Link>
          <Link href="#pricing" className="hover:text-zinc-900">
            ราคา
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="hidden text-xs font-medium text-zinc-500 hover:text-zinc-800 sm:inline"
          >
            Admin Login
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800"
          >
            ดูแพ็กเกจ
          </Link>
        </div>
      </div>
    </header>
  );
}

