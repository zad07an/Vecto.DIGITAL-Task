import { LoaderCircle } from "lucide-react";

interface LoadingSpinnerProps {
  size?: number;
}

export const LoadingSpinner = ({ size = 24 }: LoadingSpinnerProps) => {
  return <LoaderCircle className="animate-spin" size={size} />;
};
