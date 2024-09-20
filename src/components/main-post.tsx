// TODO: Implement main post

const articles = [
	{
		image: "https://via.placeholder.com/250x400",
		category: "FILM ÖNERILERI",
		title: "Killers of the Flower Moon (2023)",
		description:
			"AI is revolutionizing the healthcare industry, from diagnostics to personalized treatment plans.",
	},
	{
		image: "https://via.placeholder.com/250x400",
		category: "FILM ÖNERILERI",
		title: "Killers of the Flower Moon (2023)",
		description:
			"AI is revolutionizing the healthcare industry, from diagnostics to personalized treatment plans.",
	},
	{
		image: "https://via.placeholder.com/250x400",
		category: "FILM ÖNERILERI",
		title: "Killers of the Flower Moon (2023)",
		description:
			"AI is revolutionizing the healthcare industry, from diagnostics to personalized treatment plans.",
	},
	{
		image: "https://via.placeholder.com/250x400",
		category: "FILM ÖNERILERI",
		title: "Killers of the Flower Moon (2023)",
		description:
			"AI is revolutionizing the healthcare industry, from diagnostics to personalized treatment plans.",
	},
	{
		image: "https://via.placeholder.com/250x400",
		category: "FILM ÖNERILERI",
		title: "Killers of the Flower Moon (2023)",
		description:
			"AI is revolutionizing the healthcare industry, from diagnostics to personalized treatment plans.",
	},
	{
		image: "https://via.placeholder.com/250x400",
		category: "FILM ÖNERILERI",
		title: "Killers of the Flower Moon (2023)",
		description:
			"AI is revolutionizing the healthcare industry, from diagnostics to personalized treatment plans.",
	},
	{
		image: "https://via.placeholder.com/250x400",
		category: "FILM ÖNERILERI",
		title: "Killers of the Flower Moon (2023)",
		description:
			"AI is revolutionizing the healthcare industry, from diagnostics to personalized treatment plans.",
	},
	{
		image: "https://via.placeholder.com/250x400",
		category: "FILM ÖNERILERI",
		title: "Killers of the Flower Moon (2023)",
		description:
			"AI is revolutionizing the healthcare industry, from diagnostics to personalized treatment plans.",
	},
	{
		image: "https://via.placeholder.com/250x400",
		category: "FILM ÖNERILERI",
		title: "Killers of the Flower Moon (2023)",
		description:
			"AI is revolutionizing the healthcare industry, from diagnostics to personalized treatment plans.",
	},
];

export default function MainPost() {
	return (
		<div className='col-span-2'>
			<h1>Main Post</h1>
			{articles.map((article, index) => (
				<div key={index} className='mb-8'>
					<img
						src={article.image}
						alt={article.title}
						width='250'
						height='400'
						className='rounded-lg mb-4 w-full aspect-video object-full'
					/>
					<span className='text-sm text-gray-500 uppercase'>
						{article.category}
					</span>
					<h3 className='text-xl font-semibold mb-2'>{article.title}</h3>
					<p className='text-gray-600'>{article.description}</p>
				</div>
			))}
		</div>
	);
}
