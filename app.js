$(document).ready(function () {
    const images = [
        "https://images.unsplash.com/photo-1697451964285-7ef6f139277c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1697230135334-f92b62d49b93?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1697201688455-90e5e1147fb0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1685350767266-a0fc514fb41e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1670324374550-c0898f81fc1b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
    const pictureElement = $("#slide");
    let currentIndex = 0;
    let isPlaying = false;

    function playSlideshow() {

        //constantly play fade out effect
        if (isPlaying) {
            pictureElement.fadeOut(500, function () {
                currentIndex = (currentIndex + 1) % images.length;
                pictureElement.attr("src", images[currentIndex]);
                pictureElement.fadeIn(500, function () {
                    setTimeout(playSlideshow, 2000);
                });
            });
        }
    }

    $("#start").on("click", function () {
        isPlaying = true;
        playSlideshow();
    });

    $("#stop").on("click", function () {
        isPlaying = false;
    });

    //set bear
    pictureElement.attr("src", images[currentIndex]);
});
