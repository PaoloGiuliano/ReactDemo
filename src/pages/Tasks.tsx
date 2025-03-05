// Tasks.tsx
import React from "react";
import Fancybox from "../components/Fancybox";

const images = [
  { src: "https://lipsum.app/id/60/1600x1200", caption: "Image 1" },
  { src: "https://lipsum.app/id/61/1600x1200", caption: "Image 2" },
  { src: "https://lipsum.app/id/62/1600x1200", caption: "Image 3" },
  { src: "https://lipsum.app/id/63/1600x1200", caption: "Image 4" },
  { src: "https://lipsum.app/id/64/1600x1200", caption: "Image 5" },
  { src: "https://lipsum.app/id/65/1600x1200", caption: "Image 6" },
  { src: "https://lipsum.app/id/66/1600x1200", caption: "Image 7" },
  { src: "https://lipsum.app/id/67/1600x1200", caption: "Image 8" },
];

const Tasks: React.FC = () => {
  return (
    <div className="min-h-full bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-center text-2xl font-bold">Tasks Page</h1>
        <p className="mb-6 text-center text-gray-700">This is the tasks page</p>
        <Fancybox
          images={images}
          width={200}
          height={150}
          options={{
            Carousel: { infinite: false },
            Thumbs: { type: "classic" },
          }}
        />
      </div>
    </div>
  );
};

export default Tasks;
