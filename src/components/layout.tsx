export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="dark:bg-gray-900 min-h-[100dvh]">{children}</div>;
}
