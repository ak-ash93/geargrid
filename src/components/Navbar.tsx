import { checkUser } from "@/lib/checkUser";
import NavbarClient from "@/components/NavbarClient";

type NavbarProps = {
  isAdminPage?: boolean;
};
const Navbar = async ({ isAdminPage = false }: NavbarProps) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return <NavbarClient isAdmin={isAdmin} isAdminPage={isAdminPage} />;
};

export default Navbar;
