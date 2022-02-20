const Post = require('./Post');
const User = require('./User');



// create associations

//1 team many players
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//blue player belongs to blue team
Post.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Post };