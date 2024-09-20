"use client";

import BannerWrapper from "@/components/banner-wrapper";
import PostWrapper from "@/components/post-wrapper";

export default function Home() {
	return (
		<main className='flex flex-col gap-4'>
			<BannerWrapper />
			<PostWrapper />
		</main>
	);
}
