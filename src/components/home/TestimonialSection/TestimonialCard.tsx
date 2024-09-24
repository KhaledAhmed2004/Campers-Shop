import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type TestimonialCardProps = {
  author: string;
  review: string;
  rating: number;
};
const TestimonialCard = ({ author, review, rating }: TestimonialCardProps) => {
  // Function to render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0; // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {/* Full Stars */}
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <FaStar key={i} className="text-yellow-500 text-xl" />
          ))}

        {/* Half Star */}
        {halfStar && <FaStarHalfAlt className="text-yellow-500 text-xl" />}

        {/* Empty Stars */}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <FaRegStar key={i} className="text-yellow-500 text-xl" />
          ))}
      </div>
    );
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-primary text-2xl mb-4" />

      {/* Review Text */}
      <p className="text-gray-600 text-lg mb-4">{review}</p>

      {/* Star Rating */}
      <div className="mb-4">{renderStars(rating)}</div>

      {/* Author Name */}
      <h3 className="text-primary font-semibold text-xl">- {author}</h3>

      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-transparent opacity-20 rounded-lg"></div>
    </div>
  );
};

export default TestimonialCard;
