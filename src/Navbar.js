import React from 'react'

const Navbar = () => {
  return (
    <>
    <header id="site-header" class="fixed-top main-header">
                        <div class="container-fluid w3HeaderLogoEd">
                            <nav class="navbar navbar-expand-lg stroke">
                                <h1><a class="navbar-brand" href="https://wp.w3layouts.com/aquarium/">
				Aquarium					</a></h1>

                                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle Navigation">
					<span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
					<span class="navbar-toggler-icon fa icon-close fa-times"></span>
				</button>

                                <div class="collapse navbar-collapse" id="navbar-content">
                                    <ul id="primary-menu" class="navbar-nav ml-lg-auto">
                                        <li id="menu-item-21" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-21 nav-item active"><a href="https://wp.w3layouts.com/aquarium/" class="nav-link active">Home</a></li>
                                        <li id="menu-item-22" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-22 nav-item"><a href="https://wp.w3layouts.com/aquarium/about-page/" class="nav-link">About</a></li>
                                        <li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23 nav-item"><a href="https://wp.w3layouts.com/aquarium/services-page/" class="nav-link">Services</a></li>
                                        <li id="menu-item-24" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-24 nav-item dropdown"><a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbar-dropdown-menu-link-24" aria-haspopup="true" aria-expanded="false">Pages</a>
                                            <div class="sub-menu dropdown-menu" aria-labelledby="navbar-dropdown-menu-link-24">
                                                <a href="https://wp.w3layouts.com/aquarium/blog-page/" class="dropdown-item" id="menu-item-25">Blog Page</a><a href="https://wp.w3layouts.com/aquarium/404-page/" class="dropdown-item" id="menu-item-26">404 page</a>
                                                <a
                                                    href="https://wp.w3layouts.com/aquarium/elements-page/" class="dropdown-item" id="menu-item-27">Elements page</a><a href="https://wp.w3layouts.com/aquarium/single-landing-page/" class="dropdown-item" id="menu-item-28">Landing page</a></div>
                                        </li>
                                        <li id="menu-item-29" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29 nav-item"><a href="https://wp.w3layouts.com/aquarium/contact-page/" class="nav-link">Contact</a></li>
                                    </ul>
                                  
                                    <div class="search-right ml-lg-3 HeaderSearch">
                                        <form action="https://wp.w3layouts.com/aquarium/" method="GET" class="search-box position-relative">
                                            <div class="input-search">
                                                <input type="search" placeholder="Enter Keyword" name="s" required="required" class="search-popup"/>
                                            </div>
                                            <button type="submit" class="btn search-btn"><i class="fa fa-search"
									aria-hidden="true"></i></button>
                                        </form>
                                    </div>
                               

                                </div>

                              
                                <div class="cont-ser-position DarkandLight">
                                    <nav class="navigation">
                                        <div class="theme-switch-wrapper">
                                            <label class="theme-switch" for="checkbox">
								<input type="checkbox" id="checkbox"/>
								<div class="mode-container">
									<i class="gg-sun"></i>
									<i class="gg-moon"></i>
								</div>
							</label>
                                        </div>
                                    </nav>
                                </div>
                              
                            </nav>
                        </div>
                   
                    </header>
    </>
  )
}

export default Navbar