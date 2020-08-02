/* Section 1 */
const s1  = document.querySelector('#s1')
const s1__headers = document.querySelector('.s1__headers')
const s1__imageApplication = document.querySelector('.s1__image-application')
const s1__particles = document.querySelector('.s1__particles')


s1.addEventListener('mousemove', (target) => {
    const coefficient = 0.02
    s1__headers.style.marginLeft = -(target.x * coefficient) + 'px'
    s1__headers.style.marginTop = -(target.y * coefficient) + 'px'

    s1__imageApplication.style.marginLeft = (target.x * coefficient) + 'px'
    s1__imageApplication.style.marginTop = (target.y * coefficient) + 'px'

    s1__particles.style.left = (target.x * -coefficient*2) + 'px'
    s1__particles.style.top = (target.y * -coefficient*2) + 'px'
})






// /* Section 2 */
// const s2  = document.querySelector('#s2')
// const s2__imgContainer = document.querySelector('.s2__img-container')
// const s2__imgDescriptionContainer = document.querySelector('.s2__img-description')
//
//
// s2.addEventListener('mousemove', (target) => {
//     const coefficient = 0.01
//     s2__imgContainer.style.marginLeft = (target.x * coefficient) + 'px'
//     s2__imgContainer.style.marginTop = (target.y * coefficient) + 'px'
//
//     s2__imgDescriptionContainer.style.marginLeft = -(target.x * coefficient) + 'px'
//     s2__imgDescriptionContainer.style.marginTop = -(target.y * coefficient) + 'px'
//
// })




/* Section 3 */
let s3 = document.querySelector('#s3')
let s3__video = document.querySelector('.s3__video')
const s3__film = document.querySelectorAll('.s3__film')




const changeVideo = (videoContainer, trigger) => {

    const videoPath = './assets/video/'
    const dataFilesName = trigger.getAttribute('data-files-name')

    // Does file is really changed?
    if(videoContainer.getAttribute('data-files-name') !== dataFilesName){

        videoContainer.classList.add('hide')


        if(document.body.clientWidth > 1300) {
            window.scrollTo({
                top: s3.getBoundingClientRect().top + pageYOffset,
                behavior: "smooth"
            })
        }


        setTimeout(() => {
            // Setting new attributes to our video tag
            videoContainer.setAttribute('data-files-name', dataFilesName)


            // Setting new attributes to our sources tags in video tag
            const videoSources = videoContainer.querySelectorAll('source')

            videoSources.forEach((source) => {
                const sourceType = source.getAttribute('type').split('/')[1]
                const newFile = videoPath+dataFilesName+'.'+sourceType

                source.setAttribute('src', newFile)

            })

            // Load new video
            videoContainer.load()

            // Show new video
            videoContainer.classList.remove('hide')


        }, 600)

    }
}




const changeActiveFilmElement = (allElements, currentElement) => {
    allElements.forEach((element) => {
        element.classList.remove('active')
    })
    currentElement.classList.add('active')
}



s3__film.forEach((film) => {
    film.addEventListener('mouseover', () => {
        changeVideo(s3__video, film)
        changeActiveFilmElement(s3__film, film)
    })
})



const makeVideoBgSticky =  (target, parent) => {

    const scrolled = window.pageYOffset
    const targetOffset = parent.getBoundingClientRect().top + scrolled

    if(scrolled > targetOffset && document.body.clientWidth < 1300){
        target.style.top = scrolled - targetOffset + 'px'
    }else{
        target.style.top = '0px'
    }
}

window.addEventListener('scroll', function() {
    makeVideoBgSticky(s3__video, s3);
});

window.addEventListener('resize', function() {
    makeVideoBgSticky(s3__video, s3);
});

makeVideoBgSticky(s3__video, s3);
