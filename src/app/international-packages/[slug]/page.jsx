import { internationalPackages } from "@/data/internationalData";
import PackageDetail from "@/components/PackageDetail";

export default function InternationalPackageDetail({ params }) {
  const { slug } = params;
  const tour = Object.values(internationalPackages).find(tour => tour.slug === slug);
  return <PackageDetail tour={tour} type="international" />;
} 