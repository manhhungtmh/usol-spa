$(document).ready(function () {
    $.get("https://6037e3394e3a9b0017e927ed.mockapi.io/api/v1/usol", function (data, status) {
        if (status == "success") {
            $("#Introduce").html(data[0]);
            $("#Address").html(data[1]);
            $("#Contact").html(data[2]);
        } else {
            $(".container").html("<h1>WEBSITE ĐANG BẢO TRÌ, VUI LÒNG TRUY CẬP LẠI SAU !!!</h1>");
        }
    });
    hideAllData();
    $(".btnShow").click(function () {
        var DataShow = $(this).attr("id");
        if (DataShow == "showIntroduce") {
            hideAllData();
            $("#Introduce").show();
        } else if (DataShow == "showAddress") {
            hideAllData();
            $("#Address").show();
        } else if (DataShow == "showContact") {
            hideAllData();
            $("#Contact").show();
        }
    });
    function hideAllData() {
        $("#Introduce").hide();
        $("#Address").hide();
        $("#Contact").hide();
    }
});
