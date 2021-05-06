$(window).ready(function(){
    setFigureNumbers();
    setFigureReferences();
});

function setFigureNumbers()
{
    $(".figure").each(function(i){
        $(this).find(".caption").prepend('<span class="type"></span>');
        $(this).find(".type").html("Figure " + (i + 1));
    })
}

function setFigureReferences()
{
    $(".ref").each(function(i){
        let name = $(this).attr("data-ref");
        let type = getFigureTypeFromName(name);
        $(this).html(type);
    })
}

function getFigureTypeFromName(value)
{
    return $(".figure[data-ref='" + value + "']").find(".type").html();
}
