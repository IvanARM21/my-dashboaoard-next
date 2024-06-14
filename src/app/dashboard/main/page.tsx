import { WidgetsGrid } from "@/components";

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Información General'
}

export default function MainPage() {
  return (
    <div className="text-black text-center">
      <h1 className="mt-10 text-5xl">Dashboard</h1>
      <span className="text-xl">Informacion General</span>

      <WidgetsGrid />
      
    </div>
  );
}