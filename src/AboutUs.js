import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <div className="image-card">
            <img src="https://i.postimg.cc/pL9Gt3gZ/job.jpg" alt="Request a Quote" />
            <h2>Post a Job</h2>
            <p>Find the right tradesperson for your project.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card">
          <div className="image-card">
            <img src="https://i.postimg.cc/wvPQqQnm/trade-signup.jpg" alt="Request a Quote" />
            <h2>Post a Job</h2>
            <p>Find the right tradesperson for your project.</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card">
          <div className="image-card">
            <img src="https://i.postimg.cc/Wzp08JG3/request-quote.jpg" alt="Request a Quote" />
            <h2>Post a Job</h2>
            <p>Find the right tradesperson for your project.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
