import Image from "next/image";
import Footer from "./components/layout/Footer";
import SearchBar from "./components/ui/SearchBar";
import MainTitle from "./components/ui/MainTitle";
import Card from "./components/ui/Card";
import CardsLayout from "./components/layout/CardsLayout";
import DescriptionTextLayout from "./components/layout/DescriptionTextLayout";
import Main from "./components/layout/Main";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Main />
      <Footer />
      
    </div>
  );
}
