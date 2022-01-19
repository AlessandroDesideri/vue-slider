new Vue({
    el: "#app",
    data: {
        cityImage: [
            "./img/calcio.jpg",
            "./img/golf.jpg",
            "./img/hockey.jpg",
            "./img/basket.jpg",
            "./img/volleyball.jpg"
        ],
        currentIndex: 0,
        interval: 0,
        start: false,
        timer: null,
        overImage: false,
        counterColor: 0,
        colorIsTrue: false,
    },
     methods: {

        // to do
        
        getDotClasses: function(i) {
            let classes = 'point';
            if(this.currentIndex === i) {
                classes += ' active-color';
            }
            return classes;
        },
        thisImage: function(i) {
            this.currentIndex = i
        },
        next: function () {
            this.currentIndex++;
            if(this.currentIndex >= this.cityImage.length) {
                this.currentIndex = 0;
            }
        },
        prev: function () {
            this.currentIndex--;
            if(this.currentIndex < 0) {
                this.currentIndex = this.cityImage.length - 1
            }
        },

        autoplay: function () {
            this.timer = setInterval( () => {
                this.next();
            }, 2000);

        },
        playscroll: function() {
            this.autoplay();
        },
        stopscroll: function(){
            clearInterval(this.timer)
        },

        stopButton: function () {
            this.colorIsTrue = !this.colorIsTrue;
            clearInterval(this.timer);
        },

        startButton: function () {
            this.colorIsTrue = !this.colorIsTrue;
            this.autoplay();
        },

    },
        
});
        