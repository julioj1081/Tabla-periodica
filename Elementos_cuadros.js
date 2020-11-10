/**/
    let Alcalino = document.querySelector("#Alcalino");
    Alcalino.addEventListener("click", function(){
        alert("Alcalino");
    var loader = new TimelineMax({ repeat: 1, yoyo: true }),
    circles = $('.Alcalino'),
    stagger_options = {
      /* opacity: 0,
      y: -800,
      ease: Elastic.easeInOut */
      duration: 2, x: 30, opacity: 0, scale: 0.5
    };
    loader.staggerTo(circles, 0.25, stagger_options, 0.35);
    });
    /**/
    let Alcalinoterreo = document.querySelector("#Alcalinoterreo");
    Alcalinoterreo.addEventListener("click", function(){
        alert("Alcalinoterreo");
        var loader = new TimelineMax({ repeat: 1, yoyo: true }),
        circles = $('.Alcalinoterreo'),
        stagger_options = {
        /* opacity: 0,
        y: -800,
        ease: Elastic.easeInOut */
        duration: 2, x: 30, opacity: 0, scale: 0.5
        };
        loader.staggerTo(circles, 0.25, stagger_options, 0.35);
    });
    /**/
    let Gaseoso = document.querySelector("#Gaseoso");
    Gaseoso.addEventListener("click", function(){
        alert("Gaseoso");
        var loader = new TimelineMax({ repeat: 1, yoyo: true }),
        circles = $('.Gaseoso'),
        stagger_options = {
        /* opacity: 0,
        y: -800,
        ease: Elastic.easeInOut */
        duration: 2, x: 30, opacity: 0, scale: 0.5
        };
        loader.staggerTo(circles, 0.25, stagger_options, 0.35);
    });
    /**/

    let No_metal = document.querySelector("#No_metal");
    No_metal.addEventListener("click", function(){
        alert("No metal");
        var loader = new TimelineMax({ repeat: 1, yoyo: true }),
        circles = $('.No_metal'),
        stagger_options = {
        opacity: 0,
        x: 10,
        scale: 1.5,
        ease: Elastic.easeInOut 
        };
        loader.staggerTo(circles, 0.015, stagger_options, 0.135);    
    });
    /**/
    let Metal_de_transición = document.querySelector("#Metal_de_transición");
    Metal_de_transición.addEventListener("click", function(){
        alert("Metal de transición");
        var loader = new TimelineMax({ repeat: 1, yoyo: true }),
        circles = $('.Metal_de_transición'),
        stagger_options = {
        opacity: 0,
        y: 5,
        scale: 1.2,
        ease: Elastic.easeInOut 
        };
        loader.staggerTo(circles, 0.25, stagger_options, 0.025);  
    });
    /**/
    let Metal_de_bloque = document.querySelector("#Metal_de_bloque");
    Metal_de_bloque.addEventListener("click", function(){
        alert("Metal de bloque");
        var loader = new TimelineMax({ repeat: 1, yoyo: true }),
        circles = $('.Metal_de_bloque'),
        stagger_options = {
        opacity: 0,
        y: 2,
        scale: 2,
        ease: Elastic.easeInOut 
        };
        loader.staggerTo(circles, 0.015, stagger_options, 0.135); 
    });
    /**/
    let Semimetal = document.querySelector("#Semimetal");
    Semimetal.addEventListener("click", function(){
        alert("Semimetal");
        var loader = new TimelineMax({repeat: 1, yoyo: true}),
        circles = $('.Semimetal');
        stagger_options = {
            duration: 3, x: 20, ease: "bounce", opacity: 0
        };
        loader.staggerTo(circles, 0.25, stagger_options, 0.22);
    });

    let Lantánido = document.querySelector("#Lantánido");
    Lantánido.addEventListener("click", function(){
        alert("Lantánido");
        var loader = new TimelineMax({ repeat: 1, yoyo: true }),
        circles = $('.Lantánido'),
        stagger_options = {
        opacity: 0,
        y: 5,
        scale: 1.2,
        ease: Elastic.easeInOut 
        };
        loader.staggerTo(circles, 0.35, stagger_options, 0.25);   
    });

    let Actínido = document.querySelector("#Actínido");
    Actínido.addEventListener("click", function(){
        alert("Actínido");
        var loader = new TimelineMax({ repeat: 1, yoyo: true }),
        circles = $('.Actínido'),
        stagger_options = {
        opacity: 0,
        y: 5,
        scale: 1.2,
        ease: Elastic.easeInOut 
        };
        loader.staggerTo(circles, 0.35, stagger_options, 0.25);
    });