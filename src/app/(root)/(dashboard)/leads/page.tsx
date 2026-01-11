
import Search from "@/components/common/search";
import LeadsTable from "@/components/leads/table";
export default function page() {
  return (
    <>
      <h2 className="text-2xl font-semibold">Leads</h2>
      <Search></Search>
      <LeadsTable></LeadsTable>
    </>
  );
}
