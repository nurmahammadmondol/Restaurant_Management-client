import React from 'react';

const AboutUs = () => {
  return (
    <div className="my-16 w-11/12 md:w-10/12 mx-auto  md:flex gap-10">
      <div className="w-full p-3">
        <h3 className="text-2xl md:text-4xl font-bold mb-2">
          Welcome to <span className="bangers-regular-font">YumYum Bites!</span>
        </h3>
        <p className="">
          Welcome to YumYum Bites Restaurant, where delicious flavors meet a
          warm and inviting ambiance! We take pride in serving freshly prepared
          dishes made from high-quality ingredients. Our dedicated team ensures
          every meal brings joy to your table. Whether it's a family gathering,
          romantic dinner, or casual meetup, we promise an unforgettable dining
          experience. Come, taste the difference today!
        </p>

        <br />
        <hr />
        <br />

        <h3 className="text-lg font-bold">
          <i class="fa-brands fa-codepen mr-1"></i> Our Story
        </h3>
        <p className="text-sm text-gray-500">
          Our journey started with a simple dream: to create a place where great
          food meets great people. Since our founding, we’ve dedicated ourselves
          to offering mouth-watering dishes crafted from the freshest
          ingredients.
        </p>

        <br />
        <hr />
        <br />

        <h3 className="text-lg font-bold">
          <i class="fa-brands fa-codepen mr-1"></i> Our Values
        </h3>
        <ul className="text-sm text-gray-500">
          <li>
            <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
            <span className="font-semibold">Fresh Ingredients :</span>
            Every dish is made with fresh and high-quality ingredients.
          </li>

          <li>
            <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
            <span className="font-semibold">Customer Delight :</span>
            Your satisfaction is our top priority.
          </li>

          <li>
            <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
            <span className="font-semibold">Creativity :</span> We love
            experimenting with flavors to bring something new to your table.
          </li>
          <li>
            <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
            <span className="font-semibold">Sustainability :</span>
            We are committed to eco-friendly practices in our kitchen and
            operations.
          </li>
        </ul>

        <br />
        <hr />
        <br />

        <h3 className="text-lg font-bold">
          <i class="fa-brands fa-codepen mr-1"></i> Our Team
        </h3>
        <p className="text-sm text-gray-500">
          A team of passionate chefs, friendly staff, and food lovers who strive
          to make your experience memorable.
        </p>

        <br />
        <hr />
        <br />

        <h3 className="text-lg font-bold">
          <i class="fa-brands fa-codepen mr-1"></i> Social Responsibility
        </h3>
        <p className="text-sm text-gray-500">
          At yum yum bites, we believe in giving back to the community and
          promoting a healthier, more active lifestyle. Our commitment to social
          responsibility includes:
        </p>

        <br />
        <hr />
        <br />

        <h3 className="text-lg font-bold">
          <i class="fa-brands fa-codepen mr-1"></i> Contact Us
        </h3>
        <ul className="text-sm text-gray-500">
          <li>
            <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
            <span className="font-semibold"> Address: </span>
            Rangpur, Dhaka, Bangladesh.
          </li>
          <li>
            <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
            <span className="font-semibold"> Email: </span>
            info@restaurant.com
          </li>
          <li>
            <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
            <span className="font-semibold">Phone: </span> +880123456789
          </li>
          <li>
            <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
            <span className="font-semibold">Social Media:</span> [Facebook,
            Twitter Links]
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
