"use client";

import { useState, useEffect } from "react";
import { Preloader } from "@/components/preloader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This will only run on the client
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return <>{children}</>;
}
