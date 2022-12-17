import { IconButton } from 'apps/platform/design-system/buttons';
import { mdiMagnify, mdiAlertBoxOutline } from '@mdi/js';

function ActivityShorthand() {
  return (
    <div className="flex">
      <IconButton
        className="first:mr-2"
        variant="secondary"
        icon={mdiMagnify}
      />
      <IconButton variant="secondary" icon={mdiAlertBoxOutline} />
    </div>
  );
}

export { ActivityShorthand };
