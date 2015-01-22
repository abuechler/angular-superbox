(function () {

  var app = angular.module('superboxDemo', ['superbox']);

  app.controller('SuperboxCtrl', ['$scope', '$timeout', function ($scope, $timeout) {


    function editEntry(entry) {
      alert('Edit on ' + entry.title + ' invoked.');
    }

    function deleteEntry(entry) {
      alert('Delete on ' + entry.title + ' invoked.');
    }

    var dummyDesc = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invuuidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

    $scope.images = [
      {
        uuid: 1,
        name: 'Camera',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-1.jpg',
        img_full: 'img/superbox/superbox-full-1.jpg'

      },
      {
        uuid: 2,
        name: 'Bridge',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-2.jpg',
        img_full: 'img/superbox/superbox-full-2.jpg'

      },
      {
        uuid: 3,
        name: 'Rails',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-3.jpg',
        img_full: 'img/superbox/superbox-full-3.jpg'

      },
      {
        uuid: 4,
        name: 'Car',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-4.jpg',
        img_full: 'img/superbox/superbox-full-4.jpg'

      },
      {
        uuid: 5,
        name: 'Lamp',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-5.jpg',
        img_full: 'img/superbox/superbox-full-5.jpg'

      },
      {
        uuid: 6,
        name: 'Golden Gate',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-6.jpg',
        img_full: 'img/superbox/superbox-full-6.jpg'

      },
      {
        uuid: 7,
        name: 'Dancing',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-7.jpg',
        img_full: 'img/superbox/superbox-full-7.jpg'

      },
      {
        uuid: 8,
        name: 'Black & White',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-8.jpg',
        img_full: 'img/superbox/superbox-full-8.jpg'

      },
      {
        uuid: 9,
        name: 'Smoke',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-9.jpg',
        img_full: 'img/superbox/superbox-full-9.jpg'

      },
      {
        uuid: 10,
        name: 'Time',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-10.jpg',
        img_full: 'img/superbox/superbox-full-10.jpg'

      },
      {
        uuid: 11,
        name: 'Fashion',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-11.jpg',
        img_full: 'img/superbox/superbox-full-11.jpg'

      },
      {
        uuid: 12,
        name: 'Light',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-12.jpg',
        img_full: 'img/superbox/superbox-full-12.jpg'

      },
      {
        uuid: 13,
        name: 'Adventure',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-13.jpg',
        img_full: 'img/superbox/superbox-full-13.jpg'

      },
      {
        uuid: 14,
        name: 'Music',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-14.jpg',
        img_full: 'img/superbox/superbox-full-14.jpg'

      },
      {
        uuid: 15,
        name: 'Clock',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-15.jpg',
        img_full: 'img/superbox/superbox-full-15.jpg'

      },
      {
        uuid: 16,
        name: 'Wild',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-16.jpg',
        img_full: 'img/superbox/superbox-full-16.jpg'

      },
      {
        uuid: 17,
        name: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-17.jpg',
        img_full: 'img/superbox/superbox-full-17.jpg'
      },
      {
        uuid: 18,
        name: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-18.jpg',
        img_full: 'img/superbox/superbox-full-18.jpg'
      },
      {
        uuid: 19,
        name: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-19.jpg',
        img_full: 'img/superbox/superbox-full-19.jpg'
      },
      {
        uuid: 20,
        name: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-20.jpg',
        img_full: 'img/superbox/superbox-full-20.jpg'
      },
      {
        uuid: 21,
        name: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-21.jpg',
        img_full: 'img/superbox/superbox-full-21.jpg'
      },
      {
        uuid: 22,
        name: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-22.jpg',
        img_full: 'img/superbox/superbox-full-22.jpg'
      },
      {
        uuid: 23,
        name: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-23.jpg',
        img_full: 'img/superbox/superbox-full-23.jpg'
      },
      {
        uuid: 24,
        name: 'Winter',
        description: dummyDesc,
        alt: 'Alt',
        img_thumb: 'img/superbox/superbox-thumb-24.jpg',
        img_full: 'img/superbox/superbox-full-24.jpg'
      }
    ];


    $timeout(function () {
      var newEntry = {
        uuid: $scope.images.length + 1,
        name: 'Camera',
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