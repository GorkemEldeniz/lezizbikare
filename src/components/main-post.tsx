"use client";

import { getNavigationPath } from "@/helpers";
import type { Media, Review } from "@/types/review";
import { Calendar, Clock, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import data from "../data/boilerplate-review-data.json";
import { formatReleaseDate } from "../helpers";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function MainPost() {
	const mainPost = useMemo(() => data as Review[], []) as Review[];

	return (
		<div className='col-span-2 flex flex-col gap-4'>
			<h1 className='text-2xl font-bold'>Main Post</h1>
			{mainPost.map(({ id, media, title, article, type }) => (
				<MainPostCard
					key={id}
					id={id}
					media={media}
					title={title}
					article={article}
					type={type}
				/>
			))}
		</div>
	);
}

interface MainPostCardProps {
	id: string;
	media: Media;
	title: string;
	article: string;
	type: "movie" | "tv";
}

function MainPostCard({ id, media, title, article, type }: MainPostCardProps) {
	const router = useRouter();

	const handleClick = (id: string, type: "movie" | "tv") => {
		router.push(getNavigationPath(id, type));
	};

	return (
		<Card
			key={id}
			className='w-full max-w-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300'
		>
			<div className='flex flex-col sm:flex-row'>
				<div className='w-full sm:w-1/3 relative'>
					<img
						alt='Killers of the Flower Moon scene'
						className='w-full h-48 sm:h-full object-cover aspect-square'
						height='200'
						src={media.thumbnail_url}
						width='200'
					/>
					<Badge className='absolute top-2 left-2 bg-primary text-primary-foreground'>
						{type.toLocaleUpperCase("en-US")}
					</Badge>
				</div>
				<CardContent className='w-full sm:w-2/3 p-4 flex flex-col justify-between bg-card'>
					<div>
						<h2 className='text-2xl font-semibold mb-2 text-card-foreground'>
							{title}
						</h2>
						<p className='text-muted-foreground text-sm mb-4'>{article}</p>
						<div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
							<div className='flex items-center'>
								<Star className='h-4 w-4 mr-1 text-yellow-400' />
								<span>{media.rating}/10</span>
							</div>
							<div className='flex items-center'>
								<Clock className='h-4 w-4 mr-1' />
								<span>{media.duration} min</span>
							</div>
							<div className='flex items-center'>
								<Calendar className='h-4 w-4 mr-1' />
								<span>{formatReleaseDate(media.release_date)}</span>
							</div>
						</div>
					</div>
					<div className='mt-4'>
						<Button
							variant='link'
							onClick={() => handleClick(id, type)}
							className='text-primary hover:underline text-sm font-medium'
						>
							Read full review
						</Button>
					</div>
				</CardContent>
			</div>
		</Card>
	);
}
