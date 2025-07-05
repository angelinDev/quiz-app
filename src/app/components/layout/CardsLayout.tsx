import React from "react";
import Card from "../ui/Card";

function CardsLayout() {
  return (
    <div className="flex justify-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {/* Example card */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* Ajoutez d'autres cards ici */}
      </div>
    </div>
  );
}

export default CardsLayout;
