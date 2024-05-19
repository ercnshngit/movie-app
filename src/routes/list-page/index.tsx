import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

export default function ListingPage() {
  let params = useParams();
  let type = params.type || null;

  if (!type) {
    return (
      <div>
        Aradığınız başlık bulunamamıştır.{" "}
        <Link to="/">
          <Button asChild>Anasayfaya dön</Button>
        </Link>
      </div>
    );
  }

  return <div></div>;
}
