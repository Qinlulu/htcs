$(function () {
    $('.response-role')
        .on('hide.bs.dropdown', function (e,data) {
            $('.response-role-input').val(data.data)
        })
        .on('show.bs.dropdown', function (e) {
            //
        })

});