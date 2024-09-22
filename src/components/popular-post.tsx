"use client";

import { getNavigationPath } from "@/helpers";
import type { Media, Review } from "@/types/review";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import data from "../data/boilerplate-review-data.json";
import { Card, CardContent } from "./ui/card";

export default function PopularPost() {
	const popularPosts = useMemo(() => data.slice(0, 3) as Review[], []);

	return (
		<aside className='relative col-span-1'>
			<div className='sticky top-0 p-4 flex flex-col gap-4'>
				<h3 className='text-xl font-semibold mb-2'>Popular Post</h3>
				{popularPosts.map(({ id, media, title, type }) => (
					<PopularPostCard
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

interface PopularPostCardProps {
	id: string;
	media: Media;
	title: string;
	type: "movie" | "tv";
}

function PopularPostCard({ id, media, title, type }: PopularPostCardProps) {
	const router = useRouter();

	const handleClick = (id: string, type: "movie" | "tv") => {
		router.push(getNavigationPath(id, type));
	};

	return (
		<Card
			onClick={() => handleClick(id, type)}
			className='flex-1 shrink-0 rounded-lg cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'
		>
			<CardContent className='p-4 h-40 flex items-end relative overflow-hidden'>
				<img
					src={media.thumbnail_url}
					alt={title}
					width='100'
					height='100'
					className='object-cover w-full h-full absolute top-0 left-0'
				/>
				<div className='z-10 relative w-full bg-black bg-opacity-50 p-2 rounded'>
					<h3 className='text-base text-white font-semibold leading-tight mb-1'>
						{title}
					</h3>
					<p className='text-xs text-gray-200 line-clamp-2'>
						{media?.synopsis}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
