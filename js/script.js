function submit() {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const maleNames = ["kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"]

    const month = parseInt(document.getElementById("month").value)
    const name = (document.getElementById("name").value)
    const year = parseInt(document.getElementById("year").value)
    const day = parseInt(document.getElementById("day").value)
    const dateOfBirth = new Date(year + "." + month + "." + day)
    const answer = dateOfBirth.getDay()
    const output = document.getElementById("output")
    const male = document.getElementById("male")
    const female = document.getElementById("female")


    if ((year < 0) || (year > 2021)) {
        output.style.background = "blue"
        output.style.color = "red"
        output.innerHTML = "Hello " + " " + name + " " + " please enter a valid year! "
    } else if ((month < 1) || (month > 12)) {
        output.style.background = "blue"
        output.style.color = "red"
        output.innerHTML = "Hello" + " " + name + " " + " please enter a valid month! "
    } else if (day < 0 || day > 31) {
        output.style.background = "blue"
        output.style.color = "red"
        output.innerHTML = "Hello" + " " + name + " " + " please enter a valid day! "
    }

    if (female.checked && year > 1969 && year < 2020 && month > 0 && month < 12 && day > 0 && day < 31) {
        output.style.background = "yellow"
        output.innerHTML = "Hello" + " " + name + ",   " + "you were born on a" + " " + daysOfTheWeek[answer] + "." + " " + "Suprise!!, your Akan name is:" + femaleNames[answer]

    } else if (male.checked && year > 0 && year < 2020 && month > 0 && month < 12 && day > 0 && day < 31) {
        output.style.background = "blue"
        output.innerHTML = "Hello" + " " + name + ",   " + "you were born on a" + " " + daysOfTheWeek[answer] + "." + " " + "Suprise!!, your Akan name is:" + maleNames[answer]
    } else if (female.checked && year > 0 && year < 2020 && month > 0 && month < 12 && day > 0 && day < 31) {
        output.style.background = "yellow"
        output.innerHTML = "Hello" + " " + name + ",   " + "you were born on a" + " " + daysOfTheWeek[answer] + "." + " " + "Suprise!!, your Akan name is:" + femaleNames[answer]
    }

}

document.querySelector("#details").addEventListener("submit", function(event) {
    event.preventDefault();
    submit();


})


(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e) {
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);