export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 py-8 text-xs text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Funnel Launchpad. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <p>สร้างและออกแบบด้วย Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

