"use client";

import { Card, CardContent } from "@/components/ui/card";
import { getNavigationPath } from "@/helpers";
import type { Media, Review } from "@/types/review";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import data from "../data/boilerplate-review-data.json";

interface LastPostCardProps {
	media: Media;
	type: "movie" | "tv";
	id: string;
	title: string;
}

export default function LastPost() {
	const lastTenReviews = useMemo(
		() => data.slice(-4).reverse() as Review[],
		[]
	);

	return (
		<aside className='relative col-span-1'>
			<div className='sticky top-0 p-4 gap-4 flex flex-col'>
				<h3 className='text-xl font-semibold mb-2'>Last Post</h3>
				{lastTenReviews.map(({ id, media, title, type }) => (
					<LastPostCard
						key={id}
						id={id}
						media={media}
						title={title}
						type={type}
					/>
				))}
			</div>
		</aside>
	);
}

function LastPostCard({ media, title, id, type }: LastPostCardProps) {
	const router = useRouter();

	const handleClick = (id: string, type: "movie" | "tv") => {
		router.push(getNavigationPath(id, type));
	};

	return (
		<Card
			key={id}
			className='flex-1 shrink-0 rounded-lg cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'
			onClick={() => handleClick(id, type)}
		>
			<CardContent className='p-0'>
				<div className='grid grid-cols-2 gap-4'>
					<img
						src={media.thumbnail_url}
						alt={title}
						width='250'
						height='400'
						className='object-cover w-full h-full aspect-square flex-1'
					/>
					<div className='flex p-4 flex-col'>
						<h3 className='text-gray-500 font-thin leading-2'>{title}</h3>
						<p className='text-xs'>{media?.synopsis}</p>
						<p className='mt-auto text-xs ml-auto'>({media?.year})</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
