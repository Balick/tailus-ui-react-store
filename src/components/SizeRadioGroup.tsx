import RadioGroup from '@tailus-ui/RadioGroup';
import { Text, Title } from '@tailus-ui/typography';
import Label from '@tailus-ui/Label';
import { ReactNode } from 'react';

export const SizeRadioGroup = () => (
  <div>
    <Title as="span" weight="medium" size="base">
      Size
    </Title>
    <RadioGroup.Root className="mt-3 grid grid-cols-5 gap-1.5 [--card-padding:theme(spacing.3)]">
      <RadioCard value="xl">
        <Text align="center" className="my-0">
          XL
        </Text>
      </RadioCard>
      <RadioCard value="large">
        <Text align="center" className="my-0">
          L
        </Text>
      </RadioCard>
      <RadioCard value="medium">
        <Text align="center" className="my-0">
          M
        </Text>
      </RadioCard>
      <RadioCard value="small">
        <Text align="center" className="my-0">
          S
        </Text>
      </RadioCard>
      <RadioCard value="smt">
        <Text align="center" className="my-0">
          S Tall
        </Text>
      </RadioCard>
    </RadioGroup.Root>
  </div>
);

export const RadioCard = ({ value, children }: { value: string; children: ReactNode }) => (
  <Label
    htmlFor={value}
    size="sm"
    className="-ring-offset-px block rounded-[--card-radius] border bg-[--ui-bg] p-[--card-padding] ring-primary-600 has-[[data-state='checked']]:ring-2 dark:has-[[data-state='checked']]:bg-[--ui-soft-bg]"
  >
    {children}
    <RadioGroup.Item value={value} id={value} className="hidden">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
  </Label>
);
