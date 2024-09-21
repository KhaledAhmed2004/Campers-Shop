import faqImage from "../../../assets/faq.png";

const Faq = () => {
  return (
    <div className="mt-12 mb-28  px-3 md:px-10  lg:px-16   ">
      <div className=" side-text">
        <p className="font-semibold ms-2 lg:text-[22px] primary-color">
          Campers Shop FAQ
        </p>
        <div className="flex justify-between mt-0 ">
          <h2 className=" lg:text-2xl  ms-2  font-[500]  ">
            Your Camping Questions Answered
          </h2>
        </div>
      </div>

      {/* FAQ Section start */}

      <div className=" lg:flex justify-between items-center mt-2 gap-24  w-full">
        <div className="lg:w-[50%]">
          <img src={faqImage} alt="" />
        </div>
        <div className="lg:w-[50%]">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item  border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What is Campers Shop?
              </div>
              <div className="collapse-content">
                <p>
                  Campers Shop is an e-commerce website dedicated to providing
                  all the necessary and fun items for camping enthusiasts.We
                  provide you the best camping products.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How do I place an order?
              </div>
              <div className="collapse-content">
                <p>
                  Placing an order at Campers Shop is simple. Browse our product
                  categories, add your desired items to the cart, and proceed to
                  checkout. You can checkout as a guest. Follow the prompts to
                  enter your shipping and payment information, and complete your
                  purchase.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What is your return policy?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a 30-day return policy on most items. If you are not
                  satisfied with your purchase, you can return it within 30 days
                  of receipt for a full refund or exchange, provided the item is
                  in its original condition. Some exclusions apply, so please
                  refer to our full return policy for details.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How do I know if an item is in stock?
              </div>
              <div className="collapse-content">
                <p>
                  The availability of each item is displayed on the product
                  page. If an item is out of stock, it will be indicated, and
                  you may have the option to sign up for notifications when it
                  becomes available again.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Can I change or cancel my order?
              </div>
              <div className="collapse-content">
                <p>
                  If you need to change or cancel your order, please contact our
                  customer support team as soon as possible. We will do our best
                  to accommodate your request, but please note that if the order
                  has already been processed or shipped, changes or
                  cancellations may not be possible.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Are your products environmentally friendly?
              </div>
              <div className="collapse-content">
                <p>
                  At Campers Shop, we are committed to sustainability and
                  environmental responsibility. Many of our products are made
                  from eco-friendly materials and are designed to minimize
                  environmental impact. Look for the eco-friendly label on
                  product pages for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
