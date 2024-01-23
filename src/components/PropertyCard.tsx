import { useState } from "react";
import type { Property } from "../types/hygraph";

type Props = {
  numberOfNights: number;
  estimatedAttendees: number;
  property: Property;
};

const PropertyCard = ({
  numberOfNights,
  estimatedAttendees,
  property,
}: Props) => {
  const [showMore, setShowMore] = useState(false);
  const {
    image,
    title,
    pricePerNight,
    link,
    location,
    pros,
    cons,
    bathrooms,
    rooms,
    accommodates,
  } = property ?? {};
  const showStyles =
    "max-h-[5000px] opacity-1 transition-all duration-300 ease-in-out";
  const hideStyles =
    "max-h-0 opacity-0 transition-all duration-300 overflow-hidden ease-in-out";
  return (
    <div className="bg-white p-3 shadow-sm max-w-lg flex flex-col w-full basis-full md:basis-3/6">
      <img src={image?.url} className="mb-3 h-[300px] w-[300px] object-cover" />
      <h4 className="text-xl pb-3">{title}</h4>
      {numberOfNights && (
        <p className="pb-1">
          <span>
            <strong>£{pricePerNight * numberOfNights}</strong> for{" "}
            {numberOfNights} nights
            <span className="text-xl font-light px-1">|</span>
          </span>
          <span>
            <strong>
              £{(pricePerNight * numberOfNights) / estimatedAttendees}
            </strong>{" "}
            per person
          </span>
        </p>
      )}
      <p className="pb-3">
        <span className="text-sm">
          Capacity: <strong>{accommodates}</strong>{" "}
        </span>
        <span className="text-sm">
          Rooms: <strong>{rooms}</strong>{" "}
        </span>
        <span className="text-sm">
          Bathrooms: <strong>{bathrooms}</strong>
        </span>
      </p>
      <div className="flex gap-3 text-sm lg:text-md py-3">
        <button className="border p-2" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? "Less" : "More"}
        </button>
        <a
          className="border p-2"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Site
        </a>
        <a
          className="border p-2"
          href={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show on Map
        </a>
      </div>
      <div className={`${showMore ? showStyles : hideStyles}`}>
        <div className="border p-3">
          <p>PROS:</p>
          <ul className="list-disc pl-5">
            {pros.map((pro) => (
              <li>{pro}</li>
            ))}
          </ul>
        </div>
        <div className="border p-3">
          <p>CONS:</p>
          <ul className="list-disc pl-5">
            {cons.map((con) => (
              <li>{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
