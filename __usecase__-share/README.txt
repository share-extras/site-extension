__Company__ __Usecase__ Share Site Extension
============================================

Author: __Company__


OVERVIEW
--------

__usecase__-share
  config
    alfresco
      messages
        __company__-__usecase__.properties  ---  i18n keys
      site-data
        extensions
          __company__-__usecase__-extension.xml  ---  2 modules (site specific doclib config etc)
        pages
          __company__-__usecase__-__page__.xml  ---  Your custom page
        presets
          __company__-__usecase__-presets.xml   ---  Defines dashboard & default pages
      site-webscripts
        __company__
          __usecase__
            components  ---  Your custom WebScript goes here
              __pageWebscript__.get.*  ---  A generated WebScript based on best practice, ready to be enhanced
            customizations  ---  Add your global WebScript enhancements here
              create-site.get.js  ---  Adds new __usecase__ preset to the Create site dialog
            customizations-site  ---  Add your site specific WebScript enhancements here
      templates ---  If the ootb templates aren't good enough, add your own here
        __company__
          __usecase__
      web-extension
        __company__-__usecase__-config.xml  ---  Global share config that aren't site specific (i.e. forms config)
        __company__-__usecase__-share-context.xml  ---  Spring beans, registers i18n keys, config files & doclib evaluators
  source
    web
      __company__
        __usecase__
          components
            documentlibrary
              actions
                add-__aspect__-aspect-16.png
                set-__value2__.property__-16.png
              indicators
                __property__-16.png
            __pageWebscript__.js  ---  Javascript for your custom webscript
            __pageWebscript__.css  ---  CSS for your custom webscript
  lib  ---  Libs used by ant tasks
  build.xml  ---  Dist & dev build targets, i.e. hotcopy-tomcat-zip & dist-jar
  build.properties  ---  NOTE! Add the path to your Alfresco installation


