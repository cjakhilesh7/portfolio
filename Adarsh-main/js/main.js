$(document).ready(function(){
    let $btns=$('.project-area.button-group button');

    $btns.click(function(e){

        $('.project-area .button-group buttons').removeClass('active');
        e.target.classList.add('active');
        
        let selector=$(e.target).attr('data-filter');
        $('project-area.grid').isotope({
            filter:selector
        })
        return false;

    })
})

function downloadCV() {
    // Replace 'path/to/cv.pdf' with the actual path to your CV file
    var cvUrl = '/css/img/cv.pdf';
    var link = document.createElement('a');
    link.href = cvUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

let nav_offset_top=$('.header_area').height()+50;

function navbarfixed(){
    if($('.header_area').length){
        $(window).scroll{function(){
            let scroll=$(window).scrollTop();
            if(scroll>=nav_offset_top)
        }}

    }
}



