import Page from "../callcenter/dashboard/page";
import Login from "../login/page";

export default function ClientWrapper({ isAuthenticated }: { isAuthenticated: boolean }) {
  return !isAuthenticated ? <Page /> : <Login />;
}
