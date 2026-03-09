import { AuthProvider } from "../context/AuthContext";
import { TenantProvider } from "../context/TenantContext";
import { OwnerProvider } from "../context/OwnerContext";

const Providers = ({ children }) => (
  <AuthProvider>
    <TenantProvider>
      <OwnerProvider>{children}</OwnerProvider>
    </TenantProvider>
  </AuthProvider>
);

export default Providers;
