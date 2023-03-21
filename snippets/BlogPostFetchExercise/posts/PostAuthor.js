import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

// We destructure here ({ userId }) so that when we use this component in PostsList.js, it looks like this: <PostAuthor userId={post.userId} />
const PostAuthor = ({ userId }) => {
	const users = useSelector(selectAllUsers);

	const author = users.find((user) => user.id === userId);

	return <span>by {author ? author.name : "Unknown author"} </span>;
};

export default PostAuthor;
