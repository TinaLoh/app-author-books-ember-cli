import Ember from 'ember';

export default Ember.ArrayController.extend({

  itemController: "review",

  averageRating: function(){
    var avgRatingLength = [];
    var avgRating = 0;

    this.forEach(function(reviewItem){
      var rating = reviewItem.get("model.rating");

      if (rating !== undefined) {

      avgRatingLength.push(rating);
      avgRating += rating;
      }
    });

    return (avgRating/(avgRatingLength.length));

  }.property()

});
