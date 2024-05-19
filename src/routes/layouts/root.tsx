import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { Outlet, useNavigation } from "react-router-dom";

export default function RootLayout() {
  // navigation hook is used to get the current navigation state (e.g. form submit, data loading, etc.)
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      <main
        className={cn(
          "transition-opacity duration-300 ease-in-out",
          navigation.state === "loading" && "opacity-50 pointer-events-none"
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}
