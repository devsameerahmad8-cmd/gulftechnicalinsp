import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InspectionTopic } from "@/components/InspectionTopic";
import { findInspectionTopic, inspectionTopics } from "@/lib/inspectionTopics";

export function generateStaticParams() {
  return inspectionTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = findInspectionTopic(slug);
  return { title: topic?.title ?? "Inspection" };
}

export default async function InspectionTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = findInspectionTopic(slug);
  if (!topic) notFound();
  return <InspectionTopic topic={topic} />;
}
