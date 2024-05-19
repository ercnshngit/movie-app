import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import {
  Form,
  useNavigation,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import { Input } from "../ui/input";

export default function Search() {
  let [searchParams, _] = useSearchParams();

  // submit hook is used to submit the form on every change
  const submit = useSubmit();

  // navigation hook is used to get the current navigation state (e.g. form submit, data loading, etc.)
  const navigation = useNavigation();

  let q = searchParams.get("q") || "";

  // Check if the user is currently searching
  // This is used to show the loading spinner
  // navigation is a hook that provides information about the current navigation state
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  // if user navigate back via browser, update the search input
  // we can use state hooks but react-router-dom advice to use this method because state adds more complexity
  useEffect(() => {
    if (typeof window === "undefined") return;
    let searchInput = document.getElementById("q") as HTMLInputElement;
    if (!searchInput) return;
    searchInput.value = q;
  }, [q]);

  return (
    <Form id="search-form" role="search">
      <div className="relative">
        <Input
          id="q"
          aria-label="Search contacts"
          // if the user is currently searching, add some padding to the left
          className={cn("transition-all", searching && "pl-6")}
          placeholder="Search"
          type="search"
          name="q"
          defaultValue={q}
          onChange={(event) => {
            if (
              event.target.value &&
              event.target.value.length > 0 &&
              event.target.value.length < 3
            )
              return;
            // Update search query on every change
            submit(event.currentTarget.form);
          }}
        />
        <Loader
          size="12"
          className={cn(
            "absolute left-2 top-[calc(50%-6px)] animate-spin",
            !searching && "hidden"
          )}
        />
      </div>
    </Form>
  );
}
