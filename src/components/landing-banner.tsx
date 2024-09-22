"use client";

import { getNavigationPath } from "@/helpers";
import { Media, Review } from "@/types/review";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import data from "../data/boilerplate-review-data.json";
import { Card, CardContent } from "./ui/card";

interface BannerCardProps {
	media: Media;
	title: string;
	type: "movie" | "tv";
}

export default function LandingBanner() {
	const firstFourReviews = useMemo(() => data.slice(0, 4) as Review[], []);

	return (
		<div className='flex gap-4'>
			{firstFourReviews.slice(0, 4).map(({ id, media, title, type }) => (
				<BannerCard key={id} media={media} title={title} type={type} />
			))}
		</div>
	);
}

function BannerCard({ media, title, type }: BannerCardProps) {
	const router = useRouter();

	const handleClick = (id: string, type: "movie" | "tv") => {
		router.push(getNavigationPath(id, type));
	};

	return (
		<Card
			onClick={() => handleClick(media.id, type)}
			className='flex-1 shrink-0 rounded-lg cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'
		>
			<CardContent className='p-0'>
				<div className='relative'>
					<img
						src={media?.thumbnail_url}
						alt={media?.title}
						width='250'
						height='400'
						className='object-cover'
					/>
					<div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
						<div className='mb-2'>
							<span className='inline-block bg-pink-600 text-white text-xs px-2 py-1 rounded'>
								{media?.genre}
							</span>
						</div>
						<h3 className='text-lg font-bold text-white'>{title}</h3>
						<p className='text-sm text-gray-300'>({media?.year})</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
