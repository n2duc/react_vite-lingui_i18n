import { memo } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Trans } from "@lingui/react/macro";

const DemoLongContent = memo(() => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Trans>Open</Trans>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[500px]">
        <p>
          <Trans>
            Love between two friends of the opposite sex often blossoms from
            empathy and deep understanding. It is not born of fleeting emotions,
            but built upon a foundation of trust and respect. Through the years
            they spend side by side, friendship slowly transforms into a
            profound connection, rising above ordinary affection. At times, this
            bond may unfold into romantic love, when both realize they are
            inseparable. Such love endures, for it has been tested and tenderly
            nurtured by time.
          </Trans>
        </p>
      </PopoverContent>
    </Popover>
  );
});

DemoLongContent.displayName = "DemoLongContent";

export default DemoLongContent;
