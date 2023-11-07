import commentModel from "../model/comment.model.js";

export const createComments = async (data) => {
    const { userId, productId, comment, star } = data;
    const newComment = new commentModel({
        userId: userId,
        productId: productId,
        comment: comment,
        star: star
    });
    await newComment.save();
    return newComment
}

export const getComments = async (productId) => {
    const comments = await commentModel.find({ productId: productId });
    await commentModel.populate(comments, { path: 'userId', model: 'Auth' });
    return comments;
}

export const deleteComments = async (req) => {
    const comment = await commentModel.findByIdAndDelete(req.params.id)
    return comment
}

export const getAllComments = async () => {
    const comments = await commentModel.find();
    // await commentModel.populate(comments, { path: 'userId', model: 'Auth' });
    // await commentModel.populate(comments, { path: 'productId', model: 'Product' });
    return comments;
}

export const updateComments = async (req) => {
    const comment = await commentModel.updateOne(
        {
            _id: req.params.id
        },
        {
            ...req.body
        }
    )
    return comment
}