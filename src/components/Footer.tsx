import { Caption, Text, Link as CustomLink } from "@tailus-ui/typography";
import { BrandLogo } from "./utilities/Brand";
import Separator from "@tailus-ui/Separator";
import { categories } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  const renderCategories = () =>
    categories.map(({ name, link }, idx) => (
      <Link key={idx} href={link}>
        <Text size="sm">{name}</Text>
      </Link>
    ));

  return (
    <footer>
      <div className="relative mx-auto max-w-7xl space-y-12 px-6 pb-12">
        <div>
          <BrandLogo />
          <Text className="max-w-sm my-6">React UI Kit for custom web UIs</Text>
          <Caption>
            Images by{" "}
            <CustomLink
              href="https://unsplash.com/@ryanhoffman007"
              target="_blank"
              size="sm"
            >
              Ryan Hoffman
            </CustomLink>
          </Caption>
        </div>

        <div className="grid grid-cols-3 gap-6 md:w-3/5 lg:w-2/5">
          <div>
            <Caption className="uppercase" size="xs">
              Categories
            </Caption>
            <div className="mt-8 space-y-4 *:block">{renderCategories()}</div>
          </div>

          <div>
            <Caption className="uppercase" size="xs">
              Categories
            </Caption>
            <div className="mt-8 space-y-4 *:block">{renderCategories()}</div>
          </div>

          <div>
            <Caption className="uppercase" size="xs">
              Categories
            </Caption>
            <div className="mt-8 space-y-4 *:block">{renderCategories()}</div>
          </div>
        </div>
        <Separator />
        <Caption>
          &copy; Tailus UI {new Date().getFullYear()} | All right reserved
        </Caption>
      </div>
    </footer>
  );
};
