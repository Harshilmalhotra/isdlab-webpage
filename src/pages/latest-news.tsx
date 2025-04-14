import { useState } from "react";

const newsData = [
  {
    id: 1,
    title: "AI Workshop Conducted Successfully",
    date: "April 14, 2025",
    time: "10:00 AM",
    content:
      "The Intelligent Systems Design Lab successfully conducted an AI workshop focusing on machine learning and deep learning techniques. Participants gained hands-on experience with TensorFlow and PyTorch.",
  },
  {
    id: 2,
    title: "Robotics Competition Winners Announced",
    date: "April 10, 2025",
    time: "3:00 PM",
    content:
      "The annual robotics competition concluded with Team Alpha securing first place. Their autonomous robot impressed judges with its precision and efficiency.",
  },
  {
    id: 3,
    title: "IoT Seminar Held at SRM University",
    date: "April 5, 2025",
    time: "1:00 PM",
    content:
      "An IoT seminar was held to discuss the latest trends in smart devices and edge computing. Experts from the industry shared insights on IoT applications in healthcare and automation.",
  },
];

export default function LatestNews() {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleReadMore = (news) => {
    setSelectedNews(news);
  };

  const handleClosePopup = () => {
    setSelectedNews(null);
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>

      <div className="space-y-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{news.title}</h2>
            <p className="text-gray-400 text-sm mb-4">
              {news.date} at {news.time}
            </p>
            <p className="text-gray-300 mb-4">
              {news.content.substring(0, 100)}...
            </p>
            <button
              onClick={() => handleReadMore(news)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Popup for Full Content */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">{selectedNews.title}</h2>
            <p className="text-gray-400 text-sm mb-4">
              {selectedNews.date} at {selectedNews.time}
            </p>
            <p className="text-gray-300 mb-6">{selectedNews.content}</p>
            <button
              onClick={handleClosePopup}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}