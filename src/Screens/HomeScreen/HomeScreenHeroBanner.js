import React from "react";
import img from "../../Assets/HomeScreenAssests/homeScreenMobile.jpg";
import imgTwo from "../../Assets/HomeScreenAssests/homeScreenImageTwo.jpg";
function HomeScreenHeroBanner() {
  return (
    <div>
      <div className="hero-banner-one">
        <img
          className="img-desktop"
          src="https://cdn.shopify.com/s/files/1/1367/5207/files/DUAL_DESKTOP_1440x.jpg?v=1615371476"
          alt=""
        />
        <img className="img-mobile" src={img} alt="" />

        <div className="hero-banner-call-to-action">
          <h1>New Drops</h1>
          <h3>In Adapt & Critical</h3>
          <div className="hero-banner-call-to-action-btns">
            <button className="btn btn-homescreen-white">Show Womens</button>
            <button className="btn btn-homescreen-grey">Show mens</button>
          </div>
        </div>
      </div>

      <div className="hero-banner-two">
        <img
          className="img-desktop"
          src="https://cdn.shopify.com/s/files/1/1367/5207/files/Dual_Gender_Home_Comforts_1440x.jpg?v=1615371666"
          alt=""
        />
        <img className="img-mobile" src={imgTwo} alt="" />

        <div className="hero-banner-call-to-action hero-two-CTA">
          <h1>Home Workouts</h1>
          <div className="hero-banner-call-to-action-btns">
            <button className="btn btn-homescreen-grey">Show Now</button>
          </div>
        </div>
      </div>
      <div className="hero-banner-three">
        <>
          <img
            className="resistance-banner"
            src="https://cdn.shopify.com/s/files/1/1367/5207/files/07_01_Shop_mens_ad779213-0fed-41df-a3ab-2f5245a07264_1440x.jpg?v=1615371691"
            alt=""
          />

          <div className="hero-banner-call-to-action hero-three-one-CTA">
            <h1>Resistace Training</h1>
            <div className="hero-banner-call-to-action-btns">
              <button className="btn btn-homescreen-white">Shop Now</button>
            </div>
          </div>
        </>
        <>
          <img
            className="yoga-banner"
            src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="hero-banner-call-to-action hero-three-two-CTA">
            <h1>Yoga</h1>
            <div className="hero-banner-call-to-action-btns">
              <button className="btn btn-homescreen-grey">Shop Now</button>
            </div>
          </div>
        </>
      </div>
      <div className="hero-banner-four">
        <>
          <img
            className="gym-accessories-desktop"
            src="https://cdn.shopify.com/s/files/1/1367/5201/files/DUAL_GENDER_HOME_WORKOUT_1440x.jpg?v=1615366281"
            alt=""
          />
          <img
            className="gym-accessories-mobile"
            src="https://cdn.shopify.com/s/files/1/1367/5201/files/Amended_Home_Workout_MobileArtboard_10_640x.jpg?v=1615366300"
            alt=""
          />

          <div className="hero-banner-call-to-action hero-four-CTA">
            <h1>Gym Accessories</h1>
            <div className="hero-banner-call-to-action-btns">
              <button className="btn btn-homescreen-white">Shop Now</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default HomeScreenHeroBanner;
