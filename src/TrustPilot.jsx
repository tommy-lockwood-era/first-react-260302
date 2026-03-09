import './trust-pilot.css';

// Object destructuring

export default function TrustPilot(props) {
  const headingLeft = "1. For reviewers";

  return (
    <section
      className="router router-grid"
      id="section-423897"
      style={{'backgroundColor': 'purple'}}
    >
      <div>
        {/* <!-- before --> */}
        <h3>{headingLeft}</h3>
        <p>
          Everything you need to know about using Trustpilot as a reviewer is
          here. Learn how to write reviews, find trustworthy businesses and lots
          more.
        </p>
        <a href="https://help.trustpilot.com/s/for-reviewers?language=en_US">
          See reviewer articles
        </a>
        {/* <!-- after --> */}
      </div>
      <div>
        <h3>{props.headingRight}</h3>
        <p>
          Using Trustpilot for your business? Explore our range of tools and
          solutions designed to help you at any stage of your business journey.
        </p>
        <a
          title="see reviewer articles"
          href="https://help.trustpilot.com/s/for-businesses?language=en_US"
        >
          See reviewer articles
        </a>
      </div>
    </section>
  );
}
