const inputNames = document.getElementById("inputNames");
const result = document.getElementById("result");

function download() {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(result.value));
    downloadLink.setAttribute('download', "BOPATG.html");
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function generate() {
    const namesValue = inputNames.value;
    let template = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<meta charset="utf-8">\n' +
        '       <head>\n' +
        '    <title>Bart</title>\n' +
        '    <meta charset="utf-8">\n' +
        '   <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        '    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n' +
        '   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n' +
        '    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n' +
        '    <style>\n' +
        '    .navbar {\n' +
        '        background-color: whitesmoke;\n' +
        '    }\n' +
        '    .margin {\n' +
        '        margin-bottom: 45px;\n' +
        '        margin-top: 45px;\n' +
        '    }\n' +
        '\n' +
        '   footer {\n' +
        '        margin-top: 45px;\n' +
        '       height: 90px;\n' +
        '        padding-top: 45px;\n' +
        '      background-color: whitesmoke;\n' +
        '   }\n' +
        '    </style>\n' +
        '</head>\n' +

        '<body>\n' +
        '  $REPLACE_ME$\n' +
        '<footer class="container-fluid text-center">\n' +
        '<p>&copy SIMPOSONS 2017</p>\n' +
        '</footer>\n' +
        '</body>\n' +
        '</html>\n'
    var REPLACE_ME = ""
    const names = namesValue.split(',');
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        REPLACE_ME += "<p>" + name + "</p>\n";
    }
    template = template.replace("$REPLACE_ME$", REPLACE_ME);
    result.innerHTML = template;
}