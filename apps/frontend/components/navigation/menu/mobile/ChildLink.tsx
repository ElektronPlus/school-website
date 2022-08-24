import { NavigationLink } from 'components/utils/NavigationLink';
import { NavigationItem } from 'generated/graphql';
import { PartialDeep } from 'type-fest';


export function ChildLink({ item }: { item: PartialDeep<NavigationItem>; }) {
  return (
    <li css={{ listStyleType: 'none' }}>
      <NavigationLink navigationItem={item} />
    </li>
  );
}
