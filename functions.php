<?php
/**
 * Theme functions and definitions.
 *
 * For additional information on potential customization options,
 * read the developers' documentation:
 *
 * https://developers.elementor.com/docs/hello-elementor-theme/
 *
 * @package HelloElementorChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'HELLO_ELEMENTOR_CHILD_VERSION', '2.0.0' );

/**
 * Load child theme scripts & styles.
 *
 * @return void
 */
function hello_elementor_child_scripts_styles() {

	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		[
			'hello-elementor-theme-style',
		],
		HELLO_ELEMENTOR_CHILD_VERSION
	);

}
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_scripts_styles', 20 );

function ti_custom_javascript() {
    ?>
        <script>
          document.addEventListener("DOMContentLoaded", function () {

            const whiteTouchBtn = document.getElementById("get-in-touch-white")
            const navElementWhite = document.getElementById("nav-element")
            
            const blackTouchBtn = document.getElementById("get-in-touch-black")
            const navElementGreen = document.getElementById("nav-element-green")
            
            const logoWhite = document.getElementById("homepage-logo-white2")
            const logoBlack = document.getElementById("homepage-logo-black")
            
            const section1 = document.querySelector("#section-2-desktop")
            
            const sectionOneOptions = {
  rootMargin: "-80px 0px 0px 0px"
};

            

            const sectionObserver = new IntersectionObserver(function (entries, sectionObserver) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        whiteTouchBtn.style.display = "none"
                        navElementWhite.style.display ="none"
                        logoWhite.style.display = "none"
                        navElementGreen.style.display = "block"
                        blackTouchBtn.style.display = "block"
                        blackTouchBtn.style.width = "100%"
                        blackTouchBtn.style.top = null
                        
                        logoBlack.style.display = "block"
                        console.log("not")
                    } else {
                        whiteTouchBtn.style.display = "block"
                        navElementWhite.style.display ="block"
                        logoWhite.style.display = "block"
                        logoWhite.style.width = "100%"
                        logoWhite.style.top = null
                        
                        navElementGreen.style.display = "none"
                        blackTouchBtn.style.display = "none"
                        logoBlack.style.display = "none"
                        console.log("yes")
                    }
                })

            },sectionOneOptions)

            sectionObserver.observe(section1)


        });
        </script>
    <?php
}
add_action('wp_head', 'ti_custom_javascript');
