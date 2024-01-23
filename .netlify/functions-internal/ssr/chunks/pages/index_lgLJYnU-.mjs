/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead } from '../astro_HTpw-s1j.mjs';
import { $ as $$BaseHead, a as $$Header } from './__uOFg7eK4.mjs';

const SITE_TITLE = "Zebras";
const SITE_DESCRIPTION = "Where zebras roam free";

const $$Astro$1 = createAstro("https://zebra.run");
const $$EventCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EventCard;
  const { title, theme, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(slug, "href")}> <div class="p-5 border max-w-[500px]"> <h1>${title}</h1> <p>${theme}</p> </div> </a>`;
}, "/Users/Personal/Code/THINKDROPS/zebras-run/src/components/EventCard.astro", void 0);

const $$Astro = createAstro("https://zebra.run");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
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
				slug
				theme
				title
  			}
		}
      `
      })
    }
  );
  const data = await response.json();
  console.log({ data: data.data });
  console.log({ errors: data.errors });
  const events = data.data.events;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })} <main class="p-10 flex flex-col gap-3 font-quicksand"> ${events.map((event) => renderTemplate`${renderComponent($$result, "EventCard", $$EventCard, { "title": event.title, "theme": event.theme, "slug": event.slug })}`)} </main> </body></html>`;
}, "/Users/Personal/Code/THINKDROPS/zebras-run/src/pages/index.astro", void 0);

const $$file = "/Users/Personal/Code/THINKDROPS/zebras-run/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { SITE_TITLE as S, SITE_DESCRIPTION as a, index as i };
