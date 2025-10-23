"use client";

import { useEffect, useState } from "react";
import { defaultSEO } from "@/lib/seo-config";

export default function SeoClient() {
  const [DefaultSeo, setDefaultSeo] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        // 👇 Import the default export object and extract DefaultSeo manually
        const mod = await import("next-seo");
        const LoadedSeo = (mod as any).default?.DefaultSeo || (mod as any).DefaultSeo;

        if (LoadedSeo) {
          setDefaultSeo(() => LoadedSeo);
        } else {
          console.error("❌ DefaultSeo not found in next-seo import:", mod);
        }
      } catch (error) {
        console.error("Failed to dynamically load next-seo:", error);
      }
    })();
  }, []);

  if (!DefaultSeo) return null;

  return <DefaultSeo {...defaultSEO} />;
}
