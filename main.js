/*=================scroll reveal animation=========*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    //reset: true //animation repeat
})

sr.reveal(`.content__`,{delay: 600, distance: '100px', interval:100})
sr.reveal(`.content_1 h5`,{delay: 500, distance: '100px', interval:100})
sr.reveal(`.section__`,{delay: 600, distance: '100px', interval:100})
sr.reveal(`.photo_1`,{origin: 'right'})
sr.reveal(`.photo_2`,{origin: 'top'})
sr.reveal(`.photo_3`,{origin: 'bottom'})
sr.reveal(`.section__2`,{origin: 'top'})
sr.reveal(`.section__3`,{origin: 'top'})
sr.reveal(`.section__4`,{origin: 'top'})
sr.reveal(`.section__5`,{origin: 'top'})
sr.reveal(`.section__6`,{origin: 'top'})
sr.reveal(`.package_offer`,{delay: 600, distance: '100px', interval:100})
sr.reveal(`.section__7`,{origin: 'top'})
sr.reveal(`.section__8`,{origin: 'top'})
sr.reveal(`.section__9`,{origin: 'top'})

