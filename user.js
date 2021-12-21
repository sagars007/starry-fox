/* About config changes. Change with caution. */

// smaller search engine suggestion prompt
user_pref("browser.urlbar.update1", false);

//smooth edge like scrolling:
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 120);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",  0.4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("mousewheel.min_line_scroll_amount", 22);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
user_pref("apz.frame_delay.enabled", false);

//Full screen fade faster:
user_pref("full-screen-api.transition-duration.enter", "50 50");
user_pref("full-screen-api.transition-duration.leave", "50 50");

//disable pocket
user_pref("extensions.pocket.enabled", false);

//enable userchrome stylesheets
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets",true);

// turn off about config warning prompt
user_pref("browser.aboutConfig.showWarning",	false);

user_pref("app.update.service.enabled",	false);

// backspace button to go to prev page
user_pref("browser.backspace_action",	0);

// show compact mode option in GUI
user_pref("browser.compactmode.show",	true);

// hide vpn banner
user_pref("browser.contentblocking.report.hide_vpn_banner",	true);

// ctrl tab will cycle through recent tabs
user_pref("browser.ctrlTab.sortByRecentlyUsed",	true);

// dark mode display bgcolor set to black
user_pref("browser.display.background_color.dark",	"#000000");

// prevent sudden white flashes in dark mode by disabling this. Might not always work
user_pref("browser.display.use_system_colors",	false);

user_pref("browser.download.panel.shown",	true);

user_pref("browser.engagement.ctrlTab.has-used",	true);

user_pref("browser.engagement.downloads-button.has-used",	true);

user_pref("browser.engagement.fxa-toolbar-menu-button.has-used",	true);

user_pref("browser.engagement.home-button.has-used",	true);

user_pref("browser.engagement.sidebar-button.has-used",	true);

// disable topstories in newtabpage
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories",	false);

// show mozilla snippets info in newtabpage
user_pref("browser.newtabpage.activity-stream.feeds.snippets",	true);

user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited",	false);

// disable sponsored sites in newtabpage
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites",	false);

//proton toolbar version
user_pref("browser.proton.toolbar.version",	3);

user_pref("browser.shell.checkDefaultBrowser",	false);

// disable default browser checks
user_pref("browser.shell.defaultBrowserCheckCount",	1);
user_pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun",	true);

// titlebar off
user_pref("browser.tabs.inTitlebar",	1);

// always show bookmarks bar
user_pref("browser.toolbars.bookmarks.visibility",	"always");

//auto touchmode off
user_pref("browser.touchmode.auto",	false);

// directly enable Compact Density mode without enabling it in the GUI
user_pref("browser.uidensity",	1);

// enable math calcs in url bar
user_pref("browser.urlbar.suggest.calculator",	true);

//disable topsites view in url bar. This prevents url bar from expanding on mouse click
user_pref("browser.urlbar.suggest.topsites",	false);

// enable devtools
user_pref("devtools.chrome.enabled",	true);

// enable remote debugger for browser toolbox
user_pref("devtools.debugger.remote-enabled",	true);

user_pref("devtools.everOpened",	true);

// findbar enable highlightall option
user_pref("findbar.highlightAll",	true);

// set default font
user_pref("font.name.serif.x-western",	"Segoe UI Variable Small");

// disbale first time pip toggle button
user_pref("media.videocontrols.picture-in-picture.video-toggle.has-used",	true);

// set pip button position
user_pref("media.videocontrols.picture-in-picture.video-toggle.position",	"top");

user_pref("ui.systemUsesDarkTheme",	1);

// html5 web alerts follow system flyouts
user_pref("alerts.useSystemBackend", true);   

// green color secure site padlock icon
user_pref("security.secure_connection_icon_color_gray", false);    

