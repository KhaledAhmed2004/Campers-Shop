import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {
  return (
    <div className="px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        What Customers Are Saying
      </h1>

      <Marquee
        speed={60}
        pauseOnHover={true}
        gradient={false}
        className="overflow-hidden"
      >
        <div className="flex gap-8">
          <TestimonialCard
            author={"John Doe"}
            review={
              "This camping gear is top-notch! I can't wait to use it again on my next adventure."
            }
            rating={4.5} // Pass the rating here
          />
          <TestimonialCard
            author={"Jane Smith"}
            review={
              "The service was excellent, and the products exceeded my expectations. Highly recommended!"
            }
            rating={5}
          />
          <TestimonialCard
            author={"Mike Johnson"}
            review={
              "Best camping experience ever! The tent was easy to set up and very durable."
            }
            rating={4}
          />
          {/* Add more TestimonialCard components if needed */}
        </div>
      </Marquee>
    </div>
  );
};

export default TestimonialSection;
