import { fetchGitHubProjects } from "@/components/projects";
import { fetchGalleryImages } from "@/lib/gallery";
import { ResponsiveLayout } from "@/components/layouts/responsive-layout";

export default async function Home() {
    const projects = await fetchGitHubProjects('nihal4808');
    const galleryImages = await fetchGalleryImages();

    return (
        <ResponsiveLayout projects={projects} galleryImages={galleryImages} />
    );
}
