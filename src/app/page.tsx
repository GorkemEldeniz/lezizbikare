import LandingBanner from "@/components/landing-banner";
import LandingPost from "@/components/landing-post";
import UpButton from "@/components/up-button";
export default function Home() {
	return (
		<main className='flex flex-col gap-4'>
			<LandingBanner />
			<LandingPost />
			<UpButton />
		</main>
	);
}
