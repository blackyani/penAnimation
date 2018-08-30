$(document).ready(function(){

    // move the pen body up to connect with a first part
   let introTL = new TimelineMax();

    TweenMax.set('.part3', {y: -572});

    // hide all headings and text
    // TweenMax.set(['.parts h2, .parts p'], {autoAlpha: 0});

    // create a tween that will move the pen body back to its original css position
    let bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease:Linear.easeNone});

    //Init ScrollMagic Controller
    let controller = new ScrollMagic.Controller();

    //Create a Scene 1 - move pen body back to start
    let pinScene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1,
        offset: 287,
        duration: 572
    })
        .setTween(bodyToStart)
        .addTo(controller);

    //move 4 and 5 down, to connect with part 6
    // introTL.set('.part5', {y: 120});
    // introTL.set('.part4', {y: 289});

    // move part 6 to connect with the body
    introTL.set('.part6', {y: -846});

    //move 4 and 5 to connect with part 6 again
    introTL.set('.part5', {y: -726});
    introTL.set('.part4', {y: -557});

    /// Create scene for part 6
   let p6ToStart = new TweenMax.to('.part6', 1, {y:0, ease:Linear.easeNone});

    let p6ToStartScene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1,
        offset: 1250,
        duration: 846
    })
        .setTween(p6ToStart)
        .addTo(controller);

    /// Create scene for part 5
    let p5ToStart = new TweenMax.to('.part5', 1, {y:0, ease:Linear.easeNone});

    let p5ToStartScene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1,
        offset: 1250,
        duration: 726
    })
        .setTween(p5ToStart)
        .addTo(controller);

    /// Create scene for part 4
    let p4ToStart = new TweenMax.to('.part4', 1, {y:0, ease:Linear.easeNone});

    let p4ToStartScene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1,
        offset: 1250,
        duration: 557
    })
        .setTween(p4ToStart)
        .addTo(controller);

    // Loop through all parts and add a claa .fade-in
    $('.parts li').each(function () {
        // build a scene
        let scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.55
        })
            .setClassToggle(this, 'fade-in')
            .addIndicators()
            .addTo(controller);
    })

});
