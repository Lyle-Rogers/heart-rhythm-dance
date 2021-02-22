'use strict'

const Blog = use('App/Models/Blog')
const BlogComment = use('App/Models/BlogComment')
const moment = require('moment')

class BlogController {
  async loadBlog({ view, auth }) {
    const admin = auth.user.admin;

    const blogs = await Blog
      .query()
      .orderBy('id', 'desc')
      .fetch()

    return view.render('pages/blog', { admin, blogs: blogs.toJSON() })
  }

  async sendBlog({ request, response, auth }) {
    const blog = request.all();
    const username = auth.user.username;
    const createdAt = moment().format('MMM Do YYYY');

    const posted = await auth.user.blogs().create({
      blog_message: blog.blog_message,
      username: username,
      time_created: createdAt
    });

    return response.redirect('back');
  }

  async deleteBlog({ response, params }) {
    const blog = await Blog.find(params.id);

    await blog.delete();
    return response.redirect('back');
  }

  async editBlog({ view, params, auth }) {
    const blogBeingEdited = await Blog.find(params.id);
    const editMode = true;
    const admin = auth.user.admin;

    const blogs = await Blog
      .query()
      .orderBy('id', 'desc')
      .fetch()

    return view.render('pages/blog', { blogBeingEdited, editMode, admin, blogs: blogs.toJSON() })
  }

  async updateBlog({ request, response, params }) {
    const blog = await Blog.find(params.id);

    blog.blog_message = request.all().blog_message;
    await blog.save()

    return response.redirect('/blog')
  }

  async loadComments({ view, params, auth }) {
    const userLoggedIn = auth.user.id;
    const blogBeingCommented = await Blog.find(params.id)
    const admin = auth.user.admin;

    const comments = await BlogComment
      .query()
      .where('blog_id', params.id)
      .orderBy('id', 'desc')
      .fetch()
    
    return view.render('comments/blog_comments', { userLoggedIn, blogBeingCommented, admin, comments: comments.toJSON() })
  }

  async sendBlogComment({ request, response, auth, params }) {
    const comment = request.all();
    const blog = await Blog.find(params.id)

    const userLoggedIn = auth.user.id;
    const username = auth.user.username;

    const sendComment = await BlogComment.create({
      comment: comment.blog_comment,
      user_id: userLoggedIn,
      username: username,
      blog_id: params.id
    })

    const commentCount = await BlogComment
      .query()
      .where('blog_id', params.id)
      .getCount()

    blog.comment_amount = commentCount;
    await blog.save();

    return response.redirect('back')
  }

  async deleteComment({ response, params }) {
    const comment = await BlogComment.find(params.id);

    await comment.delete();
    return response.redirect('back');
  }
}

module.exports = BlogController
