import { OrganisationStore } from "@/store/organisation.store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OrganisationStore>{children}</OrganisationStore>
    </>
  );
}
