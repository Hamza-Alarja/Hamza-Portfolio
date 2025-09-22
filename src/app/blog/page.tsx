import { Categories } from "@/constants";

import { Button } from "@/components/ui/button";
import MobileCategories from "./_components/mobile-categories";

export default function page() {
  return (
    <div className="md:flex">
      <MobileCategories />

      <section className="space-y-4 mr-16 hidden md:block">
        <h1 className="text-2xl font-extrabold">Categories</h1>
        <ul className="space-y-1.5">
          {Categories.map((category, index) => (
            <li key={index} className="text-muted-foreground">
              <Button variant={"ghost"}>{category}</Button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
