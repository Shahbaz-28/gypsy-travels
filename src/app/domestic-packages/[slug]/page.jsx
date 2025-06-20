import { domesticPackages } from "@/data/domesticData";
import PackageDetail from "@/components/PackageDetail";

export default function DomesticPackageDetail({ params }) {
  const { slug } = params;
  const tour = Object.values(domesticPackages).find(tour => tour.slug === slug);
  return <PackageDetail tour={tour} type="domestic" />;
} 