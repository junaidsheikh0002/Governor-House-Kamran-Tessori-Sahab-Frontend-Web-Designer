(function() {
    // Animate progress bars
    $(".skills-prog li")
        .find(".skills-bar")
        .each(function(i) {
            $(this)
                .find(".bar")
                .delay(i * 150)
                .animate({
                        width: $(this).parents().attr("data-percent") + "%"
                    },
                    1000,
                    "linear",
                    function() {
                        $(this).css({
                            "transition-duration": ".5s"
                        });
                    }
                );
        });

    // Animate skill circles and counters
    $(".skills-soft li")
        .find("svg")
        .each(function(i) {
            var c, cbar, circle, percent, r;
            circle = $(this).children(".cbar");
            r = circle.attr("r");
            c = Math.PI * (r * 2);
            percent = $(this).parent().data("percent");
            cbar = (100 - percent) / 100 * c;
            circle.css({
                "stroke-dashoffset": c,
                "stroke-dasharray": c
            });
            circle.delay(i * 150).animate({
                    strokeDashoffset: cbar
                },
                1000,
                "linear",
                function() {
                    circle.css({
                        "transition-duration": ".3s"
                    });
                }
            );
            $(this)
                .siblings("small")
                .prop("Counter", 0)
                .delay(i * 150)
                .animate({
                    Counter: percent
                }, {
                    duration: 1000,
                    step: function(now) {
                        $(this).text(Math.ceil(now) + "%");
                    }
                });
        });
}).call(this);

// Initialize FinisherHeader
new FinisherHeader({
    "count": 35,
    "size": {
        "min": 5,
        "max": 120,
        "pulse": 0.1
    },
    "speed": {
        "x": {
            "min": 0,
            "max": 0.2
        },
        "y": {
            "min": 0,
            "max": 0.4
        }
    },
    "colors": {
        "background": "#b580ff",
        "particles": [
            "#ffe960",
            "#87ddfe",
            "#8481ff",
            "#fc7bfc",
            "#e2ffa5"
        ]
    },
    "blending": "overlay",
    "opacity": {
        "center": 0,
        "edge": 0.7
    },
    "skew": -2,
    "shapes": [
        "c"
    ]
});