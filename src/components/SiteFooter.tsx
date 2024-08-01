import { Caption, Text, Link } from '@tailus-ui/typography';
import { BrandLogo } from './utilities/Brand';
import Separator from '@tailus-ui/Separator';

export function SiteFooter() {
  return (
    <footer>
      <div className="relative mx-auto max-w-7xl space-y-12 px-6 pb-12">
        <div className="">
          <BrandLogo />
          <Text className="max-w-sm my-6">React UI Kit for custom web UIs</Text>
          <Caption>
            Images by{' '}
            <Link href="https://unsplash.com/@ryanhoffman007" target="_blank" size="sm">
              Ryan Hoffman
            </Link>
          </Caption>
        </div>
        <div className="grid grid-cols-3 gap-6 md:w-3/5 lg:w-2/5">
          <div>
            <Caption className="uppercase" size="xs">
              Categories
            </Caption>
            <div className="mt-8 space-y-4 *:block">
              <Link variant="plain" intent="gray" size="sm" href="/" children="Knit Cap" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Bottle" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Shoes" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="T-Shirt" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Longsleeve" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Cap" />
            </div>
          </div>
          <div>
            <Caption className="uppercase" size="xs">
              Categories
            </Caption>
            <div className="mt-8 space-y-4 *:block">
              <Link variant="plain" intent="gray" size="sm" href="/" children="Knit Cap" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Bottle" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Shoes" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="T-Shirt" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Longsleeve" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Cap" />
            </div>
          </div>
          <div>
            <Caption className="uppercase" size="xs">
              Categories
            </Caption>
            <div className="mt-8 space-y-4 *:block">
              <Link variant="plain" intent="gray" size="sm" href="/" children="Knit Cap" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Bottle" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Shoes" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="T-Shirt" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Longsleeve" />
              <Link variant="plain" intent="gray" size="sm" href="/" children="Cap" />
            </div>
          </div>
        </div>
        <Separator />
        <Caption>&copy; Tailus UI 2056 | All right reserved</Caption>
      </div>
    </footer>
  );
}
