import ModalBackdrop from "@/component/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound} from "next/navigation";

export default async function InterceptedImagePage({params}) {

const newsItemSLug = params.slug;
const newsItem = await getNewsItem(newsItemSLug);

    if (!newsItem) {
        notFound();
    }

    
    return (
        <>
        <ModalBackdrop />
        <dialog className="modal" open>
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
        </dialog>
        </>
    );
}