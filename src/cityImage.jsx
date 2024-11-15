import React, { useState, useEffect } from "react";
import axios from "axios";

const CityImage = ({ cityName }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (cityName) {
      const fetchImage = async () => {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
              params: { query: cityName, per_page: 1 },
              headers: {
                Authorization: `Client-ID YtDoxhbb70nDaAn8kwJE190Ckx5hbdTitfu53IQ6j5w`,
              },
            }
          );
          if (response.data.results.length > 0) {
            setImageUrl(response.data.results[0].urls.regular);
          } else {
            setImageUrl("default-image-url.jpg"); // Provide a valid default image URL
          }
        } catch (error) {
          console.error("Error fetching the image:", error);
        }
      };
      fetchImage();
    }
  }, [cityName]);

  return (
    <div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={cityName}
          style={{ width: "100%", borderRadius: "10px" }}
        />
      )}
    </div>
  );
};

export default CityImage;
