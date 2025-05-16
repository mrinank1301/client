import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Argosian</title>
        <meta name="description" content="The page you're looking for cannot be found. Please check the URL or navigate back to our homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="text-center p-8  rounded-lg  max-w-md mx-auto">
          <div className="mb-6">
            <h1 className="text-9xl font-bold text-gray-800 mb-2">404</h1>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
