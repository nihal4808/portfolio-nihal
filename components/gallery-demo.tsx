import * as fs from 'fs';
import * as path from 'path';
import InfiniteGallery from "@/components/ui/3d-gallery-photography";

export default function GalleryDemo() {
    // Dynamically read files from public/gallery directory
    const galleryDirectory = path.join(process.cwd(), 'public/gallery');
    let sampleImages: { src: string; alt: string }[] = [];

    try {
        if (fs.existsSync(galleryDirectory)) {
            const fileNames = fs.readdirSync(galleryDirectory);
            sampleImages = fileNames
                .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
                .map((file) => ({
                    src: `/gallery/${file}`,
                    alt: file,
                }));
        }
    } catch (error) {
        console.error("Error reading gallery directory:", error);
    }

    // Fallback if no local images found
    if (sampleImages.length === 0) {
        sampleImages = [
            { src: 'https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', alt: 'Image 1' },
            { src: 'https://images.unsplash.com/photo-1754769440490-2eb64d715775?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' },
            { src: 'https://images.unsplash.com/photo-1758640920659-0bb864175983?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3' },
            { src: 'https://plus.unsplash.com/premium_photo-1758367454070-731d3cc11774?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
            { src: 'https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 5' },
            { src: 'https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 6' },
            { src: 'https://images.unsplash.com/photo-1725878746053-407492aa4034?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 7' },
            { src: 'https://images.unsplash.com/photo-1752588975168-d2d7965a6d64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D', alt: 'Image 8' },
        ];
    }

    return (
        <div className="relative w-full h-full min-h-[600px] lg:min-h-[800px] overflow-hidden rounded-3xl border border-white/10 mt-16 group">
            <InfiniteGallery
                images={sampleImages}
                speed={1.2}
                zSpacing={3}
                visibleCount={12}
                falloff={{ near: 0.8, far: 14 }}
                className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-center px-4 mix-blend-exclusion text-white">
                <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl tracking-tighter">
                    <span className="italic relative drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">GALLERY <span className="opacity-50 text-xl block mt-2 tracking-widest uppercase font-sans font-bold">Photography & Artifacts</span></span>
                </h2>
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center font-mono uppercase text-[10px] sm:text-xs font-semibold px-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>Use mouse wheel, arrow keys, or touch to navigate</p>
            </div>
        </div>
    );
}
