const mongoose = require('mongoose');
const {Schema, model} = mongoose;
//post için mongoose özelliği olan schema ile yeni bir şema-model olusturulur
const PostSchema = new Schema({
    title:String,
    summary:String,
    content:String,
    cover:String,
    author:{type:Schema.Types.ObjectId, ref:'User'}, //ilgili ObjectId'in User koleksiyonundaki bir belgeye referans olduğunu belirtir.
},{
    timestamps: true,//belgelerin oluşturulma  ve güncellenme  zamanlarını otomatik olarak takip etmesini sağlar.
});

const PostModel = model('Post',PostSchema); //bir belge tipini temsil eden bir Mongoose modeli oluşturur

module.exports = PostModel;