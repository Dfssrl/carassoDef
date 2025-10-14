import DashBoard from "../call-center/dashboard/page";
import Login from "../login/page";

export default function ClientWrapper({ isAuthenticated }: { isAuthenticated: boolean }) {
  return !isAuthenticated ? <DashBoard /> : <Login />;
}
