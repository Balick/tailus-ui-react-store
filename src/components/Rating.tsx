import { twMerge } from 'tailwind-merge';
import Card from '@tailus-ui/Card';
import { Title, Caption } from '@tailus-ui/typography';

type Rating = {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
};

export const Rating = ({ rating, ratings }: { rating: number; ratings: number }) => {
  return (
    <div className="flex items-center gap-1 text-warning-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>
          <StarIcon isDisabled={index >= rating} />
        </span>
      ))}
      <span className="mx-1 size-1 rounded-full bg-[--ui-border-color]" />
      <Caption>{ratings} ratings</Caption>
    </div>
  );
};

export const RatingComparison = ({ rating }: { rating: Rating }) => (
  <Card className="bg-transparent" variant="outlined">
    <Title as="h2" weight="medium">
      Ratings
    </Title>
    <div className="mt-6 space-y-2.5">
      <Meter gradient stars={5} percent={rating.five} />
      <Meter stars={4} percent={rating.four} />
      <Meter stars={3} percent={rating.three} />
      <Meter stars={2} percent={rating.two} />
      <Meter stars={1} percent={rating.one} />
    </div>
  </Card>
);

const Meter = ({ stars, percent, gradient }: { stars: 1 | 2 | 3 | 4 | 5; percent: number; gradient?: boolean }) => (
  <div className="grid items-center gap-2 text-[--title-text-color] [grid-template-columns:auto_1fr_auto]">
    <span className="block w-16 text-sm">
      {stars}
      {stars === 1 ? ' star' : ' stars'}
    </span>
    <div className="w-full overflow-hidden rounded bg-[--ui-soft-bg]">
      <div
        className={twMerge('h-4 bg-gray-600 dark:bg-gray-400', gradient && 'bg-gradient-to-r from-primary-600 to-accent-400')}
        style={{ width: `${percent}%` }}
      />
    </div>
    <span className="block w-12 text-right text-sm">{percent}%</span>
  </div>
);

const StarIcon = ({ isDisabled }: { isDisabled?: boolean }) => {
  return (
    <>
      {isDisabled ? (
        <svg
          className="size-5 text-gray-950 opacity-25 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
            <path
              fill="currentColor"
              d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z"
            ></path>
          </g>
        </svg>
      ) : (
        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="none">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
            <path
              fill="currentColor"
              d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z"
            ></path>
          </g>
        </svg>
      )}
    </>
  );
};
