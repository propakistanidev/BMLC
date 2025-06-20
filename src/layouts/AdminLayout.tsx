import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <AdminSidebar />
            <main className="flex-1 p-6 bg-gray-100 min-h-screen overflow-y-auto">
                {children}
            </main>
        </div>
    );
}