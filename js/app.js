// Scroll function
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10 ){
            $('.fixed-top').addClass('sticky-header');
        } else {
            $('.fixed-top').removeClass('sticky-header');
        }
    });
});
// ANIMATE SCROLL
$(function () {
    var headerHeight = 140.5;
    $('a[href^="\\#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({'scrollTop': $target.offset().top - headerHeight}, 1200);
    });
});
// FORM VALIDATION
$(function(){
    $('#survey_form').validate({
        rules: {
            'year': {
                required: true
            },
            'survey-statement': {
                required: true
            },
            'sr-management1': {
                required:  true
            },
            'sr-management2': {
                required:  true
            },
            'sr-management3': {
                required:  true
            },
            'sr-management4': {
                required:  true
            },
            'sr-management5': {
                required:  true
            },
            'sr-management6': {
                required:  true
            },
            'org-effectiveness1': {
                required: true
            },
            'org-effectiveness2': {
                required: true
            },
            'org-effectiveness3': {
                required: true
            },
            'org-effectiveness4': {
                required: true
            },
            'org-effectiveness5': {
                required: true
            },
            'work-enviornment1': {
                required: true
            },
            'work-enviornment2': {
                required: true
            },
            'work-enviornment3': {
                required: true
            },
            'work-enviornment4': {
                required: true
            },
            'work-enviornment5': {
                required: true
            },
            'job-satisfaction1': {
                required: true
            },
            'job-satisfaction2': {
                required: true
            },
            'job-satisfaction3': {
                required: true
            },
            'job-satisfaction4': {
                required: true
            },
            'job-satisfaction5': {
                required: true
            },
            'training1': {
                required: true
            },
            'training2': {
                required: true
            },
            'training3': {
                required: true
            },
            'performance_1': {
                required: true
            },
            'performance_2': {
                required: true
            },
            'performance_3': {
                required: true
            },
            'performance_4': {
                required: true
            },
            'benefits-health1': {
                required: true
            },
            'benefits-health2': {
                required: true
            },
            'benefits-health3': {
                required: true
            },
            'salary': {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 8
            },
            'bonus_incentives': {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 8
            },
            'welfare_benefits': {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 8
            },
            'supervisor_management': {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 8
            },
            'interpersonal_colleagues': {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 8
            },
            'recognition_work': {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 8
            },
            'opportunity_abilities': {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 8
            },
            'training_received': {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 8
            },
            'textarea_1': {
                required: true,
                minlength: 30,
                maxlength: 1000
            },
            'survey_name': {
                required: true,
                minlength: 3,
                maxlength: 25
            }
        },
        highlight: function (element, errorClass) {
            $('.radioerror').css({
                'display': 'block'
            });
        },
        unhighlight: function (element, errorClass){
            $('.radioerror').css({
                'display': 'none'
            });
        }
    });
});