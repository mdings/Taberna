import DetailPage from "@/components/detail-page";
import { getDetailContent } from "@/lib/contentful";

export async function getStaticProps({ draftMode = false }) {
  const entry = await getDetailContent("munttheater-diner", { draftMode });
  if (!entry) return { notFound: true, revalidate: 60 };
  return { props: { entry, draftMode }, ...(!draftMode ? { revalidate: 60 } : {}) };
}

export default DetailPage;
