import DropZone from "@/components/DropZone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Unleash your imagination with Filehugger, the greatest online tool for
          unlimited and free multimedia converting. Freely transform photos,
          audio, and videos. Begin converting immediately to boost your content
          like never before!
        </p>
      </div>

      {/* Upload Box */}
      <DropZone />
    </div>
  );
}
