/**
 * Created by zhangying on 2017/4/26.
 */
angular.module("myapp")
        .directive("myFile",function() {
        return {
            restrict: "E",
            template: '<input type="file" id = "{{FileId}}" class = "inp">'
            + '<label class="imgs" for = "{{FileId}}">'
            + '</label>',
            scope: {},
            controller: function ($scope) {
                $scope.FileId = $scope.$id
                console.log($scope.FileId)
            },
            link: function (scope, ele, attr) {
                var label = ele.find("label")
                var input = ele.find("input")
                input.on("change",function(){
                    var reader = new FileReader()
                    reader.readAsDataURL(this.files[0])
                    reader.onload = function () {
                        label[0].style.background = "url("+this.result+")"
                    }
                })

            }
        }
    })
