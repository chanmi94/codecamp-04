import NavigationUI from "./Navigation.presenter";
import { useRouter } from "next/router";
export default function Navigation() {
  const router = useRouter();

  function onClickMenu(event: any) {
    router.push((event.target as Element).id);
  }

  return <NavigationUI onClickMenu={onClickMenu} />;
}
