import BannerCard from "./banner-card";

const data = [
	{
		id: "1",
		image: "https://via.placeholder.com/250x400",
		title: "Movie 1",
		category: "Action",
		year: "2021",
	},
	{
		id: "2",
		image: "https://via.placeholder.com/250x400",
		title: "Movie 2",
		category: "Comedy",
		year: "2022",
	},
	{
		id: "3",
		image: "https://via.placeholder.com/250x400",
		title: "Movie 3",
		category: "Drama",
		year: "2023",
	},
	{
		id: "4",
		image: "https://via.placeholder.com/250x400",
		title: "Movie 4",
		category: "Romance",
		year: "2024",
	},
];

export default function BannerWrapper() {
	return (
		<div className='flex gap-4'>
			{data.map((item) => (
				<BannerCard key={item.id} {...item} />
			))}
		</div>
	);
}
