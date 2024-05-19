import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <div className="flex gap-4">
      <Button variant="link" className="text-background" asChild>
        <Link to="/">Anasayfa</Link>
      </Button>
      <Button asChild>
        <Link to="/register">Deneme Başlat</Link>
      </Button>
    </div>
  );
}
