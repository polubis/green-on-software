import { Button } from 'apps/platform/design-system/buttons';

function LogInSection() {
  return (
    <div>
      <Button className="first:mr-2" variant="secondary">
        SIGN UP
      </Button>
      <Button variant="primary">LOG IN</Button>
    </div>
  );
}

export { LogInSection };
