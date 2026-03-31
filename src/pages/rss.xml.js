import rss, {pagesGlobToRssItems} from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "Axi's programming Blog",
        description: "A blog about programming and software development",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>en-us</language>`,
    })
}