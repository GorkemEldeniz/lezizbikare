export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="h-[calc(100vh-10rem)] grid place-items-center">{children}</main>;
}
