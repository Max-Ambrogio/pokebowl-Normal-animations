var waypoint = new Waypoint({
    element: document.querySelector('.main__hero'),
    handler: function() {
        // const button = document.querySelector('.menu__button')
        // button.classList.add('bounce')  
        // console.log("trigger")
    },
})

var waypoint = new Waypoint({
    element: document.querySelector('.main__story'),
    handler: function() {
        const button = document.querySelector('.menu__button')
        button.classList.add('bounce')  
        console.log("trigger-2")
    },
    offset:500
})

var waypoint = new Waypoint({
    element: document.querySelector('.main__gallery'),
    handler: function() {
        const img = document.querySelector('.image')
        const imgTwo = document.querySelector('.image-4')
        const imgThree = document.querySelector('.image-5')
        const imgFour = document.querySelector('.image-8')

        img.classList.add('jump')  
        imgTwo.classList.add('jump')  
        imgThree.classList.add('jump')  
        imgFour.classList.add('jump')  

        console.log("trigger-3")
    },
    offset:500
})

var waypoint = new Waypoint({
    element: document.querySelector('.main__catering'),
    handler: function() {
        const catering = document.querySelector('.learn-more')
        catering.classList.add('shake')  
        console.log("trigger-4")
    },
    offset:500
})

//   each waypoint = section