import { Search as SearchIcon } from "lucide-react";
import { Input } from "@tailus-ui/Input";

export const Search = () => (
  <div className="relative" data-shade="800">
    <SearchIcon className="pointer-events-none absolute inset-y-0 left-3 z-[1] my-auto size-4 text-[--title-text-color] opacity-50" />
    <Input
      type="search"
      variant="soft"
      size="lg"
      className="pl-10"
      placeholder="Search"
    />
  </div>
);
