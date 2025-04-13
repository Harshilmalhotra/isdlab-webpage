import Masonry from "@/components/Masonry";

export default function Gallery() {
  const data = [
    { id: 1, image: "https://picsum.photos/id/10/200/300", height: 400 },
    { id: 2, image: "https://picsum.photos/id/14/200/300", height: 300 },
    { id: 3, image: "https://picsum.photos/id/15/200/300", height: 300 },
    { id: 4, image: "https://picsum.photos/id/16/200/300", height: 300 },
    { id: 5, image: "https://picsum.photos/id/17/200/300", height: 300 },
    { id: 6, image: "https://picsum.photos/id/19/200/300", height: 300 },
    { id: 7, image: "https://picsum.photos/id/37/200/300", height: 200 },
    { id: 8, image: "https://picsum.photos/id/39/200/300", height: 300 },
    { id: 9, image: "https://picsum.photos/id/85/200/300", height: 200 },
    { id: 10, image: "https://picsum.photos/id/103/200/300", height: 400 },
    { id: 1, image: "https://picsum.photos/id/10/200/300", height: 400 },
    { id: 2, image: "https://picsum.photos/id/14/200/300", height: 300 },
    { id: 3, image: "https://picsum.photos/id/15/200/300", height: 300 },
    { id: 4, image: "https://picsum.photos/id/16/200/300", height: 300 },
    { id: 5, image: "https://picsum.photos/id/17/200/300", height: 300 },
    { id: 6, image: "https://picsum.photos/id/19/200/300", height: 300 },
    { id: 7, image: "https://picsum.photos/id/37/200/300", height: 200 },
    { id: 8, image: "https://picsum.photos/id/39/200/300", height: 300 },
    { id: 9, image: "https://picsum.photos/id/85/200/300", height: 200 },
    { id: 10, image: "https://picsum.photos/id/103/200/300", height: 400 },
    { id: 1, image: "https://picsum.photos/id/10/200/300", height: 400 },
    { id: 2, image: "https://picsum.photos/id/14/200/300", height: 300 },
    { id: 3, image: "https://picsum.photos/id/15/200/300", height: 300 },
    { id: 4, image: "https://picsum.photos/id/16/200/300", height: 300 },
    { id: 5, image: "https://picsum.photos/id/17/200/300", height: 300 },
    { id: 7, image: "https://picsum.photos/id/37/200/300", height: 200 },
    { id: 8, image: "https://picsum.photos/id/39/200/300", height: 300 },
    { id: 9, image: "https://picsum.photos/id/85/200/300", height: 200 },
    { id: 10, image: "https://picsum.photos/id/103/200/300", height: 400 },
    { id: 1, image: "https://picsum.photos/id/10/200/300", height: 400 },
    { id: 2, image: "https://picsum.photos/id/14/200/300", height: 300 },
    { id: 3, image: "https://picsum.photos/id/15/200/300", height: 300 },
    { id: 4, image: "https://picsum.photos/id/16/200/300", height: 300 },
    { id: 5, image: "https://picsum.photos/id/17/200/300", height: 300 },
    { id: 6, image: "https://picsum.photos/id/19/200/300", height: 300 },
    { id: 7, image: "https://picsum.photos/id/37/200/300", height: 200 },
    { id: 8, image: "https://picsum.photos/id/39/200/300", height: 300 },
    { id: 9, image: "https://picsum.photos/id/85/200/300", height: 200 },
    { id: 10, image: "https://picsum.photos/id/103/200/300", height: 400 },
    { id: 1, image: "https://picsum.photos/id/10/200/300", height: 400 },
    { id: 2, image: "https://picsum.photos/id/14/200/300", height: 300 },
    { id: 3, image: "https://picsum.photos/id/15/200/300", height: 300 },
    { id: 4, image: "https://picsum.photos/id/16/200/300", height: 300 },
    { id: 5, image: "https://picsum.photos/id/17/200/300", height: 300 },
    { id: 6, image: "https://picsum.photos/id/19/200/300", height: 300 },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      <Masonry data={data} />
    </div>
  );
}