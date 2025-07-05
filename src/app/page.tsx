import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Main />
      <Footer />
    </div>
  );
}
