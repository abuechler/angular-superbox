(function () {

    var app = angular.module('superboxDemo', ['superbox']);

    app.controller('SuperboxCtrl', ['$scope', function ($scope) {


        function editEntry(entry) {
            alert('Edit on ' + entry.title + ' invoked.');
        }

        function deleteEntry(entry) {
            alert('Delete on ' + entry.title + ' invoked.');
        }

        var dummyDesc = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

        $scope.images = [
            {
                title: 'Camera',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-1.jpg',
                img_full: 'img/superbox/superbox-full-1.jpg'

            },
            {
                title: 'Bridge',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-2.jpg',
                img_full: 'img/superbox/superbox-full-2.jpg'

            },
            {
                title: 'Rails',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-3.jpg',
                img_full: 'img/superbox/superbox-full-3.jpg'

            },
            {
                title: 'Car',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-4.jpg',
                img_full: 'img/superbox/superbox-full-4.jpg'

            },
            {
                title: 'Lamp',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-5.jpg',
                img_full: 'img/superbox/superbox-full-5.jpg'

            },
            {
                title: 'Golden Gate',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-6.jpg',
                img_full: 'img/superbox/superbox-full-6.jpg'

            },
            {
                title: 'Dancing',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-7.jpg',
                img_full: 'img/superbox/superbox-full-7.jpg'

            },
            {
                title: 'Black & White',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-8.jpg',
                img_full: 'img/superbox/superbox-full-8.jpg'

            },
            {
                title: 'Smoke',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-9.jpg',
                img_full: 'img/superbox/superbox-full-9.jpg'

            },
            {
                title: 'Time',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-10.jpg',
                img_full: 'img/superbox/superbox-full-10.jpg'

            },
            {
                title: 'Fashion',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-11.jpg',
                img_full: 'img/superbox/superbox-full-11.jpg'

            },
            {
                title: 'Light',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-12.jpg',
                img_full: 'img/superbox/superbox-full-12.jpg'

            },
            {
                title: 'Adventure',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-13.jpg',
                img_full: 'img/superbox/superbox-full-13.jpg'

            },
            {
                title: 'Music',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-14.jpg',
                img_full: 'img/superbox/superbox-full-14.jpg'

            },
            {
                title: 'Clock',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-15.jpg',
                img_full: 'img/superbox/superbox-full-15.jpg'

            },
            {
                title: 'Wild',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-16.jpg',
                img_full: 'img/superbox/superbox-full-16.jpg'

            },
            {
                title: 'Winter',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-17.jpg',
                img_full: 'img/superbox/superbox-full-17.jpg'
            },
            {
                title: 'Winter',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-18.jpg',
                img_full: 'img/superbox/superbox-full-18.jpg'
            },
            {
                title: 'Winter',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-19.jpg',
                img_full: 'img/superbox/superbox-full-19.jpg'
            },
            {
                title: 'Winter',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-20.jpg',
                img_full: 'img/superbox/superbox-full-20.jpg'
            },
            {
                title: 'Winter',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-21.jpg',
                img_full: 'img/superbox/superbox-full-21.jpg'
            },
            {
                title: 'Winter',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-22.jpg',
                img_full: 'img/superbox/superbox-full-22.jpg'
            },
            {
                title: 'Winter',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-23.jpg',
                img_full: 'img/superbox/superbox-full-23.jpg'
            },
            {
                title: 'Winter',
                description: dummyDesc,
                alt: 'Alt',
                img_thumb: 'img/superbox/superbox-thumb-24.jpg',
                img_full: 'img/superbox/superbox-full-24.jpg'
            }
        ];


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