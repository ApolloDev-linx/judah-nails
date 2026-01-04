import Section from "@/components/ui/Section";
import Image from "next/image";

export default function GalleryPage() {
        
        const images = [
	"/images/gallery/gal1.jpg",
 	"/images/gallery/gal2.jpg",
  	"/images/gallery/gal3.jpg",
  	"/images/gallery/gal4.jpg",
  	"/images/gallery/gal5.jpg",
  	"/images/gallery/gal6.jpg",];

	return(
		 <Section className="py-12">
      <h1 className="text-3xl font-semibold">Gallery</h1>
      <p className="mt-2 text-[hsl(var(--muted))]">
      	Look around 👀!
      </p>
      

	<div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
  	{images.map((src) => (
    	  <div key={src} className="aspect-square overflow-hidden rounded-2xl">
      	    <Image
        	src={src}
        	alt="Gallery image"
        	width={600}
        	height={600}
        	className="h-full w-full object-cover"
      	   />
          </div>
  	 ))}
	</div>

    </Section>
  );
}

