        // Get the modal
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        // Get all images inside the gallery and loop through them
        var images = document.querySelectorAll(".gallery img");

        // Add onclick event for each image to open the modal
        images.forEach(function(img) {
            img.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
        });

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }