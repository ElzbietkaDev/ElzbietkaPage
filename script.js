function SetLogoSize() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop <= 50) {
        document.getElementById('#logo').height = "300px";
    } else {
        document.getElementById('#logo').height = "60px";
    }
  };