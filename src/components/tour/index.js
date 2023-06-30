import React from "react";
import BaseComponent from "./BaseComponent";
import ReviewCard from "./ReviewCard";

class TourComponent extends BaseComponent {
  renderOverviewBox(label, text, icon) {
    return (
      <div className="overview-box__detail">
        <svg className="overview-box__icon">
          <use xlinkHref={`/img/icons.svg#icon-${icon}`} />
        </svg>
        <span className="overview-box__label">{label}</span>
        <span className="overview-box__text">{text}</span>
      </div>
    );
  }

  render() {
    const { tour, user } = this.props;

    const date = tour.startDates[0].toLocaleString("en-us", {
      month: "long",
      year: "numeric",
    });

    return (
      <div>
        <section className="section-header">
          <div className="header__hero">
            <div className="header__hero-overlay">&nbsp;</div>
            <img
              className="header__hero-img"
              src={`/img/tours/${tour.imageCover}`}
              alt={tour.name}
            />
          </div>
          <div className="heading-box">
            <h1 className="heading-primary">
              <span>{`${tour.name} tour`}</span>
            </h1>
            <div className="heading-box__group">
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-clock" />
                </svg>
                <span className="heading-box__text">{`${tour.duration} days`}</span>
              </div>
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-map-pin" />
                </svg>
                <span className="heading-box__text">
                  {tour.startLocation.description}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-description">
          <div className="overview-box">
            <div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
                {this.renderOverviewBox("Next date", date, "calendar")}
                {this.renderOverviewBox(
                  "Difficulty",
                  tour.difficulty,
                  "trending-up"
                )}
                {this.renderOverviewBox(
                  "Participants",
                  `${tour.maxGroupSize} people`,
                  "user"
                )}
                {this.renderOverviewBox(
                  "Rating",
                  `${tour.ratingsAverage} / 5`,
                  "star"
                )}
              </div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
                {tour.guides.map((guide) => (
                  <div key={guide.id} className="overview-box__detail">
                    <img
                      className="overview-box__img"
                      src={`/img/users/${guide.photo}`}
                      alt={guide.name}
                    />
                    <span className="overview-box__label">
                      {guide.role === "lead-guide"
                        ? "Lead guide"
                        : "Tour guide"}
                    </span>
                    <span className="overview-box__text">{guide.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="description-box">
            <h2 className="heading-secondary ma-bt-lg">{`About ${tour.name} tour`}</h2>
            {tour.description.split("\n").map((paragraph, index) => (
              <p key={index} className="description__text">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="section-pictures">
          {tour.images.map((img, index) => (
            <div key={index} className="picture-box">
              <img
                className={`picture-box__img picture-box__img--${index + 1}`}
                src={`/img/tours/${img}`}
                alt={`The Park Camper Tour ${index + 1}`}
              />
            </div>
          ))}
        </section>

        <section className="section-map">
          <div id="map" data-locations={JSON.stringify(tour.locations)}></div>
        </section>

        <section className="section-reviews">
          <div className="reviews">
            {tour.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>

        <section className="section-cta">
          <div className="cta">
            <div className="cta__img cta__img--logo">
              <img src="/img/logo-white.png" alt="Natours logo" />
            </div>
            <img
              className="cta__img cta__img--1"
              src={`/img/tours/${tour.images[1]}`}
              alt="Tour pictures"
            />
            <img
              className="cta__img cta__img--2"
              src={`/img/tours/${tour.images[2]}`}
              alt="Tour pictures"
            />
            <div className="cta__content">
              <h2 className="heading-secondary">What are you waiting for?</h2>
              <p className="cta__text">{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>
              {user ? (
                <button
                  id="book-tour"
                  className="btn btn--green span-all-rows"
                  data-tour-id={tour.id}
                >
                  Book tour now!
                </button>
              ) : (
                <a href="/login" className="btn btn--green span-all-rows">
                  Log in to book tour!
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TourComponent;
