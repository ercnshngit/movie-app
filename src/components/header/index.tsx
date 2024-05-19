import Logo from "./logo";
import Nav from "./nav";

export default function Header() {
  return (
    <>
      <div className="bg-foreground py-4 text-background">
        <div className="flex justify-between container mx-auto">
          <Logo />
          <Nav />
        </div>
      </div>
      <div className="bg-foreground/85 py-4 text-background">
        <div className="container mx-auto">
          <h2 className="text-lg">Popüler Başlıklar</h2>
        </div>
      </div>
    </>
  );
}
