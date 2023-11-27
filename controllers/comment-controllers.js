import Comment from "../models/comment.js"


export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();
        return response.status(200).json({ msg: "comment saved successfuly" });

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}

export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        return response.status(200).json(comments);
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

export const deleteComment = async (request, response) => {
    try {
        await Comment.findByIdAndDelete(request.params.id)
        return response.status(200).json({ msg: "post deleted succssfully" });
        // const comment = await Comment.findById(request.params.id);
        // await comment.delete();
        // response.status(200).json({ msg: "Comments delete successfully" });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}