import HomeProfile from "@/components/sections/Home/home";
import { Admin } from "@/components/sections/admin_io";
import Elemental from "@/components/sections/elemental";
import Updates from "@/components/version_updates";

export default function Home() {
  return (
    <>
      <HomeProfile />
      <Elemental />
      <Admin />
      {/* <Updates /> */}
    </>
  );
}
