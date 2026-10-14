import Hero from "../components/Hero";

// AI assistance: ChatGPT was used to help organize this page component.

function HomePage() {
  return (
    <>
      <Hero
        title="Upgrade Your Everyday Tech"
        subtitle="Discover quality gadgets designed to make your everyday life easier."
        buttonText="Shop Now"
      />

      <section className="home-intro">
        <h2>Why Shop with Us?</h2>

        <p>
          At ComponentCorner, we make it easy to find quality technology
          products for school, work, gaming, and everyday life.
        </p>

        <div className="home-benefits">
          <div>
            <h3>Quality Products</h3>
            <p>We offer useful technology products made for everyday use.</p>
          </div>

          <div>
            <h3>Easy Shopping</h3>
            <p>Browse our products and add your favorites to your cart.</p>
          </div>

          <div>
            <h3>Simple Experience</h3>
            <p>Enjoy a fast and easy shopping experience with ComponentCorner.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;