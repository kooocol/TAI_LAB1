let nav = '<ul class="nav">\n' +
    '        <li class="nav-item">\n' +
    '            <a class="nav-link active" href="#">Home</a>\n' +
    '        </li>\n' +
    '        <li class="nav-item">\n' +
    '            <a class="nav-link active" href="#">Blog</a>\n' +
    '        </li>\n' +
    '        <li class="nav-item">\n' +
    '            <a class="nav-link active" href="#">Quiz</a>\n' +
    '        </li>\n' +
    '        <li class="nav-item">\n' +
    '            <a class="nav-link active" href="contact.html">Kontakt</a>\n' +
    '        </li>\n' +
    '    </ul>'

let element = document.querySelector('.navbar');
element.innerHTML = nav;