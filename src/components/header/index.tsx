import Logo from "./logo";
import Nav from "./nav";

export default function Header() {
  return (
    <>
      <div className="bg-foreground py-4 text-background">
        <div className="flex justify-between container mx-auto items-center flex-col md:flex-row gap-4">
          <Logo />
          <Nav />
        </div>
      </div>
    </>
  );
}
