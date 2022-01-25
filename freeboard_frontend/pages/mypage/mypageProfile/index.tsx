import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MyProfile from "../../../src/components/units/mypage/myprofile/myprofile.container";
const ProfilePage = () => {
  return (
    <>
      <MyProfile />
    </>
  );
};
export default withAuth(ProfilePage);
