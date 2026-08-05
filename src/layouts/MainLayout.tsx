import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}