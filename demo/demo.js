(function () {

  var app = angular.module('superboxDemo', ['superbox']);

  app.controller('SuperboxCtrl', ['$scope', '$timeout', function ($scope, $timeout) {


    function editEntry(entry) {
      alert('Edit on ' + entry.title + ' invoked.');
    }

    function deleteEntry(entry) {
      alert('Delete on ' + entry.title + ' invoked.');
    }

    var dummyDesc = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

    $scope.images = [
      {
        id: 1,
        title: 'Camera',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-1.jpg',
        img_full: 'img/superbox/superbox-full-1.jpg'

      },
      {
        id: 2,
        title: 'Bridge',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-2.jpg',
        img_full: 'img/superbox/superbox-full-2.jpg'

      },
      {
        id: 3,
        title: 'Rails',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-3.jpg',
        img_full: 'img/superbox/superbox-full-3.jpg'

      },
      {
        id: 4,
        title: 'Car',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-4.jpg',
        img_full: 'img/superbox/superbox-full-4.jpg'

      },
      {
        id: 5,
        title: 'Lamp',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-5.jpg',
        img_full: 'img/superbox/superbox-full-5.jpg'

      },
      {
        id: 6,
        title: 'Golden Gate',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-6.jpg',
        img_full: 'img/superbox/superbox-full-6.jpg'

      },
      {
        id: 7,
        title: 'Dancing',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-7.jpg',
        img_full: 'img/superbox/superbox-full-7.jpg'

      },
      {
        id: 8,
        title: 'Black & White',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-8.jpg',
        img_full: 'img/superbox/superbox-full-8.jpg'

      },
      {
        id: 9,
        title: 'Smoke',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-9.jpg',
        img_full: 'img/superbox/superbox-full-9.jpg'

      },
      {
        id: 10,
        title: 'Time',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-10.jpg',
        img_full: 'img/superbox/superbox-full-10.jpg'

      },
      {
        id: 11,
        title: 'Fashion',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-11.jpg',
        img_full: 'img/superbox/superbox-full-11.jpg'

      },
      {
        id: 12,
        title: 'Light',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-12.jpg',
        img_full: 'img/superbox/superbox-full-12.jpg'

      },
      {
        id: 13,
        title: 'Adventure',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-13.jpg',
        img_full: 'img/superbox/superbox-full-13.jpg'

      },
      {
        id: 14,
        title: 'Music',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-14.jpg',
        img_full: 'img/superbox/superbox-full-14.jpg'

      },
      {
        id: 15,
        title: 'Clock',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-15.jpg',
        img_full: 'img/superbox/superbox-full-15.jpg'

      },
      {
        id: 16,
        title: 'Wild',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-16.jpg',
        img_full: 'img/superbox/superbox-full-16.jpg'

      },
      {
        id: 17,
        title: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-17.jpg',
        img_full: 'img/superbox/superbox-full-17.jpg'
      },
      {
        id: 18,
        title: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-18.jpg',
        img_full: 'img/superbox/superbox-full-18.jpg'
      },
      {
        id: 19,
        title: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-19.jpg',
        img_full: 'img/superbox/superbox-full-19.jpg'
      },
      {
        id: 20,
        title: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-20.jpg',
        img_full: 'img/superbox/superbox-full-20.jpg'
      },
      {
        id: 21,
        title: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-21.jpg',
        img_full: 'img/superbox/superbox-full-21.jpg'
      },
      {
        id: 22,
        title: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-22.jpg',
        img_full: 'img/superbox/superbox-full-22.jpg'
      },
      {
        id: 23,
        title: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-23.jpg',
        img_full: 'img/superbox/superbox-full-23.jpg'
      },
      {
        id: 24,
        title: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-24.jpg',
        img_full: 'img/superbox/superbox-full-24.jpg'
      }
    ];


    $timeout(function () {
      var newEntry = {
        id: $scope.images.length + 1,
        title: 'Camera',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-1.jpg',
        img_full: 'img/superbox/superbox-full-1.jpg'

      };
      $scope.images.push(newEntry);
    }, 8000);

    $scope.actions = [
      {
        label: 'Edit',
        action: editEntry
      },
      {
        label: 'Delete',
        action: deleteEntry
      }
    ];

  }]);


  console.log('Done');
}());