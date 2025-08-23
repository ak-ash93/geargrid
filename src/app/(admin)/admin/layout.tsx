import { getAdmin } from "@/actions/admin";
import { notFound } from "next/navigation";
import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appSidebar";
import Navbar from "@/components/Navbar";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const admin = await getAdmin();

  if (!admin.authorized) {
    return notFound();
  }

  return (
    <SidebarProvider className="border-t-0">
      <div className="flex h-screen w-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <div className="flex flex-1 flex-col h-full overflow-hidden">
          {/* Navbar (with sidebar trigger injected) */}
          <Navbar isAdminPage={true}>
            <SidebarTrigger className="text-white cursor-pointer hover:scale-105" />
          </Navbar>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto bg-gray-50 p-6 mt-16">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
