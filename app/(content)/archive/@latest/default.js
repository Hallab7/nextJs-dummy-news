import NewsList from "@/component/news-list";
import { getLatestNews } from "@/lib/news"

export default function LatestNewsPage() {
    const latestNews = getLatestNews();
    return (
        <>
        <h2>latest  News</h2>
        <NewsList news={latestNews} />
        </>
    )
}