import LastPost from "./last-post";
import MainPost from "./main-post";
import PopularPost from "./popular-post";

export default function PostWrapper() {
	return (
		<div className='relative grid grid-cols-4 gap-4'>
			<LastPost />
			<MainPost />
			<PopularPost />
		</div>
	);
}