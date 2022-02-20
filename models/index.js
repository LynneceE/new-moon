const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');



// create associations

//nba has many teams
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//this team belongs to nba
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
//this player plays for nba
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
//this player plays for this team
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
//nba has many players
User.hasMany(Comment, {
    foreignKey: 'user_id'
}),
//this team has many players
Post.hasMany(Comment, {
    foreignKey: 'post_id'
}),


module.exports = { User, Post, Comment };