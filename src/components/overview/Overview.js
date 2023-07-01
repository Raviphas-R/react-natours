import React from "react";
import { Link } from "react-router-dom";
import { useTourFetch } from "../../hooks/useTourFetch";
import "./Overview.css";
import { BASE_URL } from "../../config";
import icons from "../../img/icons.svg";
import Spinner from "../spinner/Spinner";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Overview = () => {
  const { tours, isLoading, error, isRenderFooter } = useTourFetch();
  if (error) return <div>Sonething went wrong ...</div>;
  return (
    <>
      <Header />
      {isLoading || !tours ? (
        <Spinner />
      ) : (
        <main>
          <div className="card-container d-flex flex-wrap justify-content-around gap-5 px-5 py-4 mt-lg-3">
            {tours.map((tour) => (
              <div
                className="card card-overview d-flex flex-column shadow"
                key={tour.id}
              >
                <div className="card__header">
                  <div className="card__picture">
                    <div className="card__picture-overlay">&nbsp;</div>
                    <img
                      className="card__picture-img"
                      src={`${BASE_URL}/img/tours/${tour.imageCover}`}
                      alt={tour.name}
                    />
                  </div>
                  <h4 className="heading-tertiary text-end">
                    <span className="px-3 py-1 rounded-pill">{tour.name}</span>
                  </h4>
                </div>
                <div className="card__details px-4 py-3">
                  <h6 className="text-uppercase fw-bold">{`${tour.difficulty} ${tour.duration}-day tour`}</h6>
                  <p className="card__details-tour-summary fst-italic">
                    {tour.summary}
                  </p>
                  <div className="row">
                    <div className="card__data col-6">
                      <svg className="card__icon me-2">
                        <use xlinkHref={`${icons}#icon-map-pin`}></use>
                      </svg>
                      <span>{tour.startLocation.description}</span>
                    </div>
                    <div className="card__data col-6">
                      <svg className="card__icon me-2">
                        <use xlinkHref={`${icons}#icon-calendar`}></use>
                      </svg>
                      <span>
                        {new Date(tour.startDates[0]).toLocaleString("en-us", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="card__data col-6">
                      <svg className="card__icon me-2">
                        <use xlinkHref={`${icons}#icon-flag`}></use>
                      </svg>
                      <span>{`${tour.locations.length} stops`}</span>
                    </div>
                    <div className="card__data col-6">
                      <svg className="card__icon me-2">
                        <use xlinkHref={`${icons}#icon-user`}></use>
                      </svg>
                      <span>{`${tour.maxGroupSize} people`}</span>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex flex-column flex-sm-row align-items-center justify-content-between pt-2 pb-3 px-4">
                  <div className="d-flex flex-column  align-items-center align-items-sm-start">
                    <p className="my-0 my-sm-1">
                      <span className="fw-bold">${tour.price}</span>
                      <span className="text-grey"> per person</span>
                    </p>
                    <p className="mb-2 my-sm-1">
                      <span className="fw-bold">
                        {tour.ratingsAverage + " "}
                      </span>
                      <span className="text-grey">
                        rating ({tour.ratingsQuantity})
                      </span>
                    </p>
                  </div>
                  <div>
                    <Link
                      to={`/tours/${tour.slug}`}
                      className="btn btn--green rounded-pill text-uppercase me-0 me-sm-2"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
      {isRenderFooter ? <Footer /> : null}
    </>
  );
};

export default Overview;
