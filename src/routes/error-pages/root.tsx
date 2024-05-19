import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

export default function RootLayout() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <Header />
      <div className="container mx-auto py-10 flex flex-col gap-4 items-start">
        <p className="text-lg mt-4">
          {(error as unknown as any)?.status +
            " - " +
            (error as unknown as any)?.statusText}
        </p>
        <h1 className="text-3xl font-semibold">Sayfa Bulunamadi</h1>
        <Button asChild>
          <Link to="/">Anasayfaya dön</Link>
        </Button>
      </div>
    </div>
  );
}
