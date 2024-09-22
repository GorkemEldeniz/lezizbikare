"use client";

import BannerWrapper from "@/components/banner-wrapper";
import PostWrapper from "@/components/post-wrapper";
import UpButton from "@/components/up-button";
export default function Home() {
	return (
		<main className='flex flex-col gap-4'>
			<BannerWrapper />
			<PostWrapper />
			<UpButton />
		</main>
	);
}
