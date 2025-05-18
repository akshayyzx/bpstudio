    import React, { useState } from "react";
    import { X } from "lucide-react";

    const WeddingGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Image array (6 repeated to make 30)
    const images = [
        "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1488312/pexels-photo-1488312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ];
    const extendedImages = [...Array(5)].flatMap(() => images);

    const youtubeVideos = [
        "https://www.youtube.com/embed/mZyOLlflWt4",
        "https://www.youtube.com/embed/yyvFzgUBzZU",
        "https://www.youtube.com/embed/3K9qFvhB_-A",
        "https://www.youtube.com/embed/arpIU9ij-cs",
    ];

    const openLightbox = (index) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);
    const navigateImage = (dir) =>
        setSelectedImage((selectedImage + dir + extendedImages.length) % extendedImages.length);

    return (
        <div className="w-full bg-gray-50 py-12">
        <div className="container mx-auto px-4">
            {/* Header */}
             <h2 className="text-4xl md:text-5xl text-gray-800 font-serif text-center mt-10 md:mt-0">
  Wedding Moments
</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto mt-5 md:mt-5">
            Capturing the romance and anticipation before your special day. These
            wedding moments tell the story of your journey together.
            </p>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {extendedImages.slice(0, 30).map((image, index) => (
                <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer h-64"
                onClick={() => openLightbox(index)}
                >
                <img
                    src={image}
                    alt={`Wedding photo ${index + 1}`}
                    className="w-full h-full object-cover"
                />
                </div>
            ))}
            </div>

            {/* YouTube Videos */}
            <h3 className="text-3xl text-gray-800 font-serif text-center mb-6">Wedding Trailers</h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
  {youtubeVideos.map((url, idx) => (
    <div
      key={idx}
      className="relative w-full overflow-hidden rounded-xl shadow-xl border-4 border-white hover:border-red-300 transition-all duration-300 bg-white"
      style={{ paddingTop: "56.25%" }} // 16:9 aspect ratio
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={url}
        title={`Wedding Video ${idx + 1}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ))}
</div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={closeLightbox}
            >
                <X size={24} />
            </button>
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={() => navigateImage(-1)}
            >
                &lt;
            </button>
            <img
                src={extendedImages[selectedImage]}
                alt={`Wedding photo ${selectedImage + 1}`}
                className="max-h-screen max-w-full object-contain"
            />
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={() => navigateImage(1)}
            >
                &gt;
            </button>
            </div>
        )}
        </div>
    );
    };

    export default WeddingGallery;
