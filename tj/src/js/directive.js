angular.module('app')
    //上传文件模块，带预览功能
    .directive('inputFile',function () {
        return {
            restrict:'E',
            //replace:true,
            template:'<label for="{{id}}" class="form-control {{cls}}"></label>' +
            '<input type="file" class="form-control input-file" id="{{id}}" placeholder="Email">',
            scope:{
                initClass:'@'
            },
            controller:['$scope',function (scope) {
                scope.id = 'direc'+scope.$id;
                scope.cls = scope.initClass=='1'? "file-upload-init":"file-upload";
            }],
            link:function (scope,ele,attr) {
                //支持预览
                var input = ele.find('input')[0];
                var container = ele.find('label')[0];
                input.onchange = function () {
                    var reader = new FileReader();
                    if(this.files[0].size<1024*200){
                        reader.readAsDataURL(this.files[0]);
                        reader.onload = function () {
                            container.style.background = 'url('+reader.result+') center center no-repeat';
                            container.style.backgroundSize = '100% 100%';
                        };
                    }else{
                        alert('请上传文件小于200KB')
                    }

                }
            }
        }
    });