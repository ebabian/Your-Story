console.log('i work!');

const app = angular.module("StoryApp", []);

app.controller('PostController', ['$http', function($http) {
  this.title = "Your Story"
  this.name = '';
  this.image = '';
  this.audio = '';
  this.timePeriod = '';
  this.updateName = ''
  this.updateImage = ''
  this.updateAudio = ''
  this.updateTimePeriod = ''
  this.toggleEdit = null
  this.toggleCreate = null

//replace this w controller
  const controller = this;


  //create
  this.createPost = function() {
    $http({
      method: 'POST',
      url: '/routes',
      data:
      {
        name: this.name,
        image: this.image,
        audio: this.audio,
        timePeriod: this.updateTimePeriod
      }
    }).then(
      function(response){
        controller.getPost()
      },
      function(error){
        console.log(error);
      })
      this.name = ''
      this.image = ''
      this.audio = ''
      this.timePeriod = ''
  }

  //edit
  this.editPost = function(story) {
    $http({
      method: 'PUT',
      url: '/routes/' + story._id,
      data:
      {
        name: this.updateName,
        image: this.updateImage,
        audio: this.updateAudio,
        timePeriod: this.updateTimePeriod
      }
    }).then(
      function(response){
        controller.getPost()
      },
      function(error){
        console.log(error);
      }
    )
    this.toggleEdit = null
  }

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
