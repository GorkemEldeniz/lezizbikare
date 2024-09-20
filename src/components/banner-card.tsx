import { Card, CardContent } from "@/components/ui/card";

interface BannerCardProps {
	id: string;
	image: string;
	title: string;
	category: string;
	year: string;
}

export default function BannerCard({
	id,
	image,
	title,
	category,
	year,
}: BannerCardProps) {
	return (
		<Card
			key={id}
			className='flex-1 shrink-0 rounded-lg cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'
		>
			<CardContent className='p-0'>
				<div className='relative'>
					<img
						src={image}
						alt={title}
						width='250'
						height='400'
						className='object-cover'
					/>
					<div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
						<div className='mb-2'>
							<span className='inline-block bg-pink-600 text-white text-xs px-2 py-1 rounded'>
								{category}
							</span>
						</div>
						<h3 className='text-lg font-bold text-white'>{title}</h3>
						<p className='text-sm text-gray-300'>({year})</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
