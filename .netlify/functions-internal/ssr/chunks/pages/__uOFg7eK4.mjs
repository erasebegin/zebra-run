/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_HTpw-s1j.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Astro$4 = createAstro("https://zebra.run");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&family=Rubik+Burned&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}>`;
}, "/Users/Personal/Code/THINKDROPS/zebras-run/src/components/BaseHead.astro", void 0);

const $$Astro$3 = createAstro("https://zebra.run");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="p-3 flex justify-center w-full"> <a href="/"><img src="/zbr.png" height="50" width="50"></a> </header>`;
}, "/Users/Personal/Code/THINKDROPS/zebras-run/src/components/Header.astro", void 0);

const PropertyCard = ({
  numberOfNights,
  estimatedAttendees,
  property
}) => {
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
    accommodates
  } = property ?? {};
  const showStyles = "max-h-[5000px] opacity-1 transition-all duration-300 ease-in-out";
  const hideStyles = "max-h-0 opacity-0 transition-all duration-300 overflow-hidden ease-in-out";
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 shadow-sm max-w-lg flex flex-col w-full basis-full md:basis-3/6", children: [
    /* @__PURE__ */ jsx("img", { src: image?.url, className: "mb-3 h-[300px] w-[300px] object-cover" }),
    /* @__PURE__ */ jsx("h4", { className: "text-xl pb-3", children: title }),
    numberOfNights && /* @__PURE__ */ jsxs("p", { className: "pb-1", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          "£",
          pricePerNight * numberOfNights
        ] }),
        " for",
        " ",
        numberOfNights,
        " nights",
        /* @__PURE__ */ jsx("span", { className: "text-xl font-light px-1", children: "|" })
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          "£",
          pricePerNight * numberOfNights / estimatedAttendees
        ] }),
        " ",
        "per person"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "pb-3", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
        "Capacity: ",
        /* @__PURE__ */ jsx("strong", { children: accommodates }),
        " "
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
        "Rooms: ",
        /* @__PURE__ */ jsx("strong", { children: rooms }),
        " "
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
        "Bathrooms: ",
        /* @__PURE__ */ jsx("strong", { children: bathrooms })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 text-sm lg:text-md py-3", children: [
      /* @__PURE__ */ jsxs("button", { className: "border p-2", onClick: () => setShowMore(!showMore), children: [
        "Show ",
        showMore ? "Less" : "More"
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "border p-2",
          href: link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Visit Site"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "border p-2",
          href: `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`,
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Show on Map"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `${showMore ? showStyles : hideStyles}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "border p-3", children: [
        /* @__PURE__ */ jsx("p", { children: "PROS:" }),
        /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5", children: pros.map((pro) => /* @__PURE__ */ jsx("li", { children: pro })) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border p-3", children: [
        /* @__PURE__ */ jsx("p", { children: "CONS:" }),
        /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5", children: cons.map((con) => /* @__PURE__ */ jsx("li", { children: con })) })
      ] })
    ] })
  ] });
};

const $$Astro$2 = createAstro("https://zebra.run");
const $$PropertyPicks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PropertyPicks;
  const { properties, numberOfNights, estimatedAttendees } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-100 px-3 py-5 border"> <h3 class="font-medium text-2xl pb-3">Property Picks</h3> <div class="flex flex-col md:flex-row md:items-start gap-2"> ${properties.map((property) => renderTemplate`${renderComponent($$result, "PropertyCard", PropertyCard, { "client:load": true, "estimatedAttendees": estimatedAttendees, "numberOfNights": numberOfNights, "property": property, "client:component-hydration": "load", "client:component-path": "/Users/Personal/Code/THINKDROPS/zebras-run/src/components/PropertyCard", "client:component-export": "default" })}`)} </div> </div>`;
}, "/Users/Personal/Code/THINKDROPS/zebras-run/src/components/PropertyPicks.astro", void 0);

const $$Astro$1 = createAstro("https://zebra.run");
const $$EventPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EventPage;
  const { title, theme } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="font-quicksand"> <article class="px-3 pb-10"> <div class="prose"> <div class="w-full p-3 md:p-5 flex flex-col items-center pb-10"> <h1 class="text-2xl">${title}</h1> <h2 class="text-5xl font-rubik">${theme}</h2> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> </body></html>`;
}, "/Users/Personal/Code/THINKDROPS/zebras-run/src/layouts/EventPage.astro", void 0);

const $$Astro = createAstro("https://zebra.run");
async function getStaticPaths() {
  const response = await fetch(
    "https://api-eu-west-2.hygraph.com/v2/clrooruf81eh901w3fgi1oiyl/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query: `
	  	{
			events(first: 50) {
				createdAt
				id
				numberOfNights
        estimatedAttendees
				slug
				theme
				title
        propertyPicks(first: 100) {
            id
            image {
              url
            }
            rooms
            location {
              latitude
              longitude
            }
            pricePerNight
            pros
            link
            title
            cons
            notes {
              markdown
            }
            accommodates
            bathrooms
          }
  			}
		}
      `
      })
    }
  );
  const data = await response.json();
  const events = data.data.events;
  console.log(events);
  return events.map((_event) => ({
    params: { slug: _event.slug },
    props: _event
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const _event = Astro2.props;
  return renderTemplate`${renderComponent($$result, "EventPage", $$EventPage, { ..._event }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PropertyPicks", $$PropertyPicks, { "properties": _event.propertyPicks || [], "numberOfNights": _event.numberOfNights, "estimatedAttendees": _event.estimatedAttendees })} ` })}`;
}, "/Users/Personal/Code/THINKDROPS/zebras-run/src/pages/[...slug].astro", void 0);

const $$file = "/Users/Personal/Code/THINKDROPS/zebras-run/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, ____slug_ as _, $$Header as a };
