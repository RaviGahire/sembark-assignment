import { Footer } from "./Footer";

export const AboutUs = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Welcome to SEMBARK – Your trusted online shopping destination!
        </p>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=60"
          alt="About"
          className="rounded-xl shadow-lg"
        />

        {/* Right Side Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-7">
            At <span className="font-semibold">SEMBARK</span>, we are committed to providing 
            high-quality products at affordable prices. Our mission is to create a seamless, 
            enjoyable shopping experience for everyone.  
          </p>

          <p className="text-gray-600 leading-7 mt-4">
            We work closely with trusted suppliers to bring you the best in fashion, electronics,
            home accessories, and much more. Customer satisfaction is our priority, and we strive
            to grow every day by delivering value and excellence.
          </p>

          <p className="text-gray-600 leading-7 mt-4">
            Thank you for choosing us — we look forward to serving you!
          </p>
        </div>
      </div>
   
    </section>
    <Footer></Footer>
    </>
  );
};
