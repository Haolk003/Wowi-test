import GradientCircularProgress from "@/components/loader/Loader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <GradientCircularProgress />
    </div>
  );
}
