import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useApp } from "../context/AppContext";
import { Button } from "../components/ui/Button";
import { MainLayout } from "../components/layout/MainLayout";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { setCurrentTab } = useApp();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-180px)] flex items-center justify-center px-4 py-6">
        <div className="text-center max-w-md">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-destructive/10 rounded-full">
              <AlertCircle size={48} className="text-destructive" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
          <p className="text-xl text-gray-700 mb-2">Page not found</p>
          <p className="text-gray-600 mb-6">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button
            fullWidth
            variant="primary"
            onClick={() => setCurrentTab('home')}
          >
            Return to Home
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
