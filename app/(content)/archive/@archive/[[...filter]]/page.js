import NewsList from "@/component/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage({params}) {
    const filter = params.filter;
    const seleectedYear = filter?.[0];
    const seleectedMonth = filter?.[1];

    let news;
    let links = await getAvailableNewsYears();

    if (seleectedYear && !seleectedMonth) {
        news = await getNewsForYear(seleectedYear)
        links = getAvailableNewsMonths(seleectedYear)
    }

    if (seleectedYear && seleectedMonth ) {
        news = await getNewsForYearAndMonth(seleectedYear, seleectedMonth);
        links = []
    }

    let newsContent = <p>no news found for the selected period</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }
    const availableYears = await getAvailableNewsYears();

    if (seleectedYear && !availableYears.includes(seleectedYear) || (seleectedMonth && !getAvailableNewsMonths(seleectedYear).includes(seleectedMonth)) ) 
        {
        throw new Error('Invalid filter');
    }
    return (
        <>
          <header id="archive-header">
    <nav>
        <ul>
        {links.map((link) =>  {
            const href = seleectedYear ? `/archive/${seleectedYear}/${link}` : `/archive/${link}`

        return (
        <li key={link}>
            <Link href={href}>{link}</Link>
        </li>
        );
    })}
        </ul>
    </nav>
</header>
        {newsContent}
        </>
        )
}