console.log('i work!');

const app = angular.module("StoryApp", []);

app.controller('PostController', ['$http', function($http) {
  this.title = "Your Story"
  this.name = '';
  this.image = '';
  this.audio = '';
  this.timePeriod = '';

//replace this w controller
  const controller = this;

//delete
this.deletePost = function(story){
  $http({
    method: 'DELETE',
    url: '/routes/' + story._id
  }).then(
    (response) => {
      this.getPost();
    },
    function(error) {
      console.log(error);
    }
  )
}

//get function
  this.getPost = function() {
    $http({
      method: 'GET',
      url: '/routes'
    }).then(
      function(response){
        console.log(response.data);
        controller.post = response.data
      },
      function(err) {
        console.log(err);
      }
    )
  }

this.getPost();
}])
