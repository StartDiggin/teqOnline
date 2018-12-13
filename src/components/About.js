import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class About extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Header />

          <div className="about">
            <div className="aboutImg">
              <h1>About Us</h1>
            </div>
            <p>
              “I was born to do this” said Eric Brambila, owner of Tequila’s
              Mexican Grill and Cantina, when asked how he started this
              business. Eric was born and raised in the city of Chicago. Both
              his parents of Mexican origin, Eric remembers spending his summer
              and winter vacation at his parents’ hometown, a small town in the
              state of Jalisco, Mexico called Union de Tula. Even though not
              born or raised in Mexico, Eric has always had passion and love for
              the Mexican culture. The food, the meals cooked at home, and the
              traditions from Union de Tula, have stuck with him through time,
              and now he brings these flavors and traditions to the
              Massachusetts community.
            </p>
            <p>
              Eric has been a hard worker since an early age; at only 16, he
              began to work selling ice cream in an ice cream truck with his
              uncle in the streets of Chicago. After turning 17, he decided to
              expand his opportunities and look for a better future, moving 800
              miles away from home to work in North Carolina for one of his
              cousins at a Mexican restaurant. Having no experience in the
              business, Eric was forced to begin from the bottom, washing
              dishes. Determined to be successful in this business that he
              enjoyed, he was quick to move up in positions, first bussing
              tables, then becoming a server. After gaining experience, proving
              to have the skills and responsibility to manage a restaurant, he
              was given the opportunity to become manager. Eric took this
              opportunity to learn more about this business, hoping to one day
              open his own place.
            </p>
            <p>
              After working for 10 years in North Carolina, at the age of 27,
              Eric had saved up every dollar he could to be a restaurant owner.
              One of his cousins, who was a restaurant owner already, called him
              offering him a partnership at a new location in Massachusetts.
              With no hesitation, Eric took this great opportunity. Finally,
              after remodeling the new place in the town of Groton,
              Massachusetts, on May 22 of the year 2013, Eric opened his
              restaurant, “Ixtapa Mexican Grill and Cantina”, being the third
              location of this family owned chain. Ixtapa in Groton was a
              success from the first day it opens its doors; with roughly 2500
              sq. ft. Eric was shocked to see the line of people outside waiting
              to try the new spot in town.
            </p>
            <p>
              With the success achieved from this location, Eric was eager to
              expand, and was determined to achieve yet another goal. This time
              he wanted to create something different. Eric wanted to bring
              together those memories from Mexico’s beautiful culture and its
              flavors to his customers to experience through fresh meals like
              the ones that were prepared while having dinner with his family.
              He simply wanted people to know Mexico through its flavors and
              culture.
            </p>
            <p>
              Tequila’s Grill and Cantina opened to the public on April 23,
              2017. With this new concept, Eric was able to win over peoples’
              palate. The guests at Tequila’s can sense Mexico’s culture since
              they walk in, with the Day of the Dead décor and the smell of
              fresh food. Tequila’s Grill offers authentic, traditional, Mexican
              food with a modern twist and fun style, with a variety of about
              100 different Tequila’s to taste, freshly made margaritas, and
              guacamole prepared freshly at your table surrounded with a relaxed
              and friendly atmosphere.
            </p>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default About;
