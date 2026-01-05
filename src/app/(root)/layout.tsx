import Sidebar from "@/components/sidebar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-1  overflow-hidden">
        <Sidebar></Sidebar>
        <section className="border-l p-4 overflow-auto flex-1 h-full ">
          {children}
        </section>
      </main>
    </>
  );
}
